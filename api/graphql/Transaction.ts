import {
  objectType, extendType, inputObjectType, arg, nonNull,
} from 'nexus';
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
    t.nonNull.int('totalPrice', {
      /**
       * WARNING!
       * This only works reliably with integer values.
       * Reliable results depend on inputs being integers and
       * for the prisma schema to use integers.
       *
       * TODO: Use a reliable way to work with currency and prices
       */
      resolve: (root, _args, _ctx, _info) => root.unitPrice * root.assetQuantity,
    });
    t.model('TransactionRecord').transactionType();
    t.model('TransactionRecord').assetQuantity();
    t.model('TransactionRecord').assetId();
  },
});

function calculateUpdatedQuantity(
  transactionType: TransactionType,
  currentQuantity: number,
  quantityChange: number,
) {
  if (transactionType === 'buy') {
    return currentQuantity + quantityChange;
  } if (transactionType === 'sell') {
    return currentQuantity - quantityChange;
  }
  return undefined;
}

export const TransactionMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('makeTransaction', {
      type: 'Transaction',
      args: {
        data: nonNull(arg({
          type: 'TransactionCreateInput',
        })),
      },
      async resolve(_root, args, ctx, _info) {
        // TODO: Add buy/sell mechanic with another field, or with negative quantity number handling

        if (args.data.unitPrice < 0) {
          throw new Error('Price cannot be a negative value');
        }
        if (args.data.assetQuantity < 0) {
          throw new Error(
            'assetQuantity must be a positive value. Use transactionType to specify a "sell" transaction if you want to decrease the total quantity owned of an asset.',
          );
        }

        const asset = await ctx.prisma.asset.findUnique({
          where: { id: args.data.assetId },
        });

        if (asset) {
          const updatedQuantity = calculateUpdatedQuantity(
            'sell',
            asset.quantity,
            args.data.assetQuantity,
          );

          if (
            args.data.transactionType === 'sell'
            && updatedQuantity
            && updatedQuantity < 0
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

            const transaction = await ctx.prisma.transactionRecord.create({
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

            await ctx.prisma.asset.update({
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
    t.nonNull.int('assetId');
    t.nonNull.field('transactionType', { type: 'TransactionType' });
    t.nonNull.int('assetQuantity');
    t.nonNull.string('currency');
    t.nonNull.int('unitPrice');
    t.string('note');
    // t.date('date');
  },
});
