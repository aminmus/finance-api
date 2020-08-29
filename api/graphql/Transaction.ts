import { schema } from "nexus";
import { TransactionType } from '@prisma/client'

schema.objectType({
  name: 'Transaction',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.date();
    t.model.note();
    t.model.currency();
    t.model.unitPrice();
    t.int('totalPrice', {
      /**
         * WARNING!
         * This only works reliably with integer values.
         * Reliable results depend on inputs being integers and 
         * for the prisma schema to use integers.
         * 
         * TODO: Use a reliable way to work with currency and prices 
         */
      resolve: (root, _args, _ctx, _info) => root.unitPrice * root.assetQuantity,
    })
    t.model.transactionType();
    t.model.assetQuantity();
    t.model.asset();
  },
});

schema.extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.createOneTransaction({
      async resolve(root, args, ctx, info, originalResolve) {
        // TODO: Add buy/sell mechanic with another field, or with negative quantity number handling

        if (args.data.unitPrice < 0) {
          throw new Error('Price cannot be a negative value');
        }
        if (args.data.assetQuantity < 0) {
          throw new Error('assetQuantity must be a positive value. Use transactionType to specify a "sell" transaction if you want to decrease the total quantity owned of an asset.');
        }

        const res = await originalResolve(root, args, ctx, info);
        const asset = await ctx.db.asset.findOne({ where: { id: res.assetId as number } });

        if (asset) {
          await ctx.db.asset.update({
            where: { id: res.assetId as number },
            data: { quantity: calculateUpdatedQuantity(args.data.transactionType, asset.quantity, asset.quantity) }
          });
        } else {
          throw new Error('Problem updating asset quantity, asset not found');
        }
        return res;
      },
    });
  }
});

function calculateUpdatedQuantity(transactionType: TransactionType, totalQuantity: number, quantityChange: number) {
  if (transactionType === 'buy') {
    return totalQuantity + quantityChange;
  } else if (transactionType === 'sell') {
    return totalQuantity - quantityChange;
  }
}
