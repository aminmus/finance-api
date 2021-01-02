import { objectType, extendType, inputObjectType, arg } from 'nexus';
import { TransactionType } from '@prisma/client';

export const Transaction = objectType({
  name: 'Transaction',
  definition(t) {
    t.model('TransactionRecord').id();
    t.model('TransactionRecord').createdAt();
    t.model('TransactionRecord').updatedAt();
    t.model('TransactionRecord').date();
    t.model('TransactionRecord').note();
    t.model('TransactionRecord').currency();
    t.model('TransactionRecord').unitPrice();
    t.int('totalPrice', {
      /**
       * WARNING!
       * This only works reliably with integer values.
       * Reliable results depend on inputs being integers and
       * for the prisma schema to use integers.
       *
       * TODO: Use a reliable way to work with currency and prices
       */
      resolve: (root, _args, _ctx, _info) =>
        root.unitPrice * root.assetQuantity,
      nullable: false,
    });
    t.model('TransactionRecord').transactionType();
    t.model('TransactionRecord').assetQuantity();
    t.model('TransactionRecord').assetId();
  },
});

export const TransactionMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('makeTransaction', {
      type: 'Transaction',
      nullable: false,
      args: {
        data: arg({
          type: 'TransactionCreateInput',
          required: true,
        }),
      },
      async resolve(_root, args, ctx, _info) {
        //TODO: Add buy/sell mechanic with another field, or with negative quantity number handling

        if (args.data.unitPrice < 0) {
          throw new Error('Price cannot be a negative value');
        }
        if (args.data.assetQuantity < 0) {
          throw new Error(
            'assetQuantity must be a positive value. Use transactionType to specify a "sell" transaction if you want to decrease the total quantity owned of an asset.',
          );
        }

        const asset = await ctx.db.asset.findUnique({
          where: { id: args.data.assetId },
        });

        if (asset) {
          const updatedQuantity = calculateUpdatedQuantity(
            'sell',
            asset.quantity,
            args.data.assetQuantity,
          );

          if (
            args.data.transactionType === 'sell' &&
            updatedQuantity &&
            updatedQuantity < 0
          ) {
            throw new Error(
              `Transaction failed. Total asset quantity cannot go below zero. Current amount of this asset you have available: ${asset.quantity}`,
            );
          } else {
            const {
              assetId,
              assetQuantity,
              currency,
              transactionType,
              unitPrice,
              date,
              note,
            } = args.data;

            const transaction = await ctx.db.transactionRecord.create({
              data: {
                asset: { connect: { id: assetId } },
                assetQuantity,
                currency,
                transactionType,
                unitPrice,
                date,
                note,
              },
            });

            await ctx.db.asset.update({
              where: { id: args.data.assetId },
              data: {
                quantity: calculateUpdatedQuantity(
                  args.data.transactionType,
                  asset.quantity,
                  args.data.assetQuantity,
                ),
              },
            });

            return transaction;
          }
        } else {
          throw new Error('Problem updating asset quantity, asset not found');
        }
      },
    });
  },
});

export const TransactionCreateInput = inputObjectType({
  name: 'TransactionCreateInput',
  definition(t) {
    t.int('assetId', { required: true });
    t.field('transactionType', { type: 'TransactionType', required: true });
    t.int('assetQuantity', { required: true });
    t.string('currency', { required: true });
    t.int('unitPrice', { required: true });
    t.string('note');
    // t.date('date');
  },
});

function calculateUpdatedQuantity(
  transactionType: TransactionType,
  currentQuantity: number,
  quantityChange: number,
) {
  if (transactionType === 'buy') {
    return currentQuantity + quantityChange;
  } else if (transactionType === 'sell') {
    return currentQuantity - quantityChange;
  }
}
