import { schema } from 'nexus';

schema.objectType({
  name: 'PrivateAsset',
  description:
    'Privately traded asset. For assets that are not traded on a supported public market.',
  definition(t) {
    t.model.id();
    t.model.baseAsset({
      async resolve(root, args, ctx, info, originalResolve) {
        const baseAsset = await originalResolve(root, args, ctx, info);
        if (baseAsset) {
          // if baseAsset exists in db (like during a "get" query)
          return baseAsset;
        } else {
          // get baseAsset from the mutation resolver instead, (works regardless of TS error)
          return root.baseAsset;
        }
      },
    });
    t.model.historicalValues({
      async resolve(root, args, ctx, info, originalResolve) {
        const historicalValues = await originalResolve(root, args, ctx, info);
        if (historicalValues) {
          return historicalValues;
        } else {
          return root.historicalValues;
        }
      },
    });
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.privateAsset();
    t.crud.privateAssets();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePrivateAsset();
    t.crud.deleteOnePrivateAsset({
      async resolve(_root, args, ctx, _info) {
        if (args.where.id) {

          const historicalValues = await ctx.db.historicalValue.findMany({
            where: { assetId: args.where.id },
          });

          const deletedHistoricalValues = ctx.db.historicalValue.deleteMany({
            where: { assetId: args.where.id },
          });

          const deletedAssetTransactions = ctx.db.transactionRecord.deleteMany({
            where: { assetId: args.where.id },
          });

          const deletedPrivateAsset = ctx.db.privateAsset.delete({
            where: { id: args.where.id },
            include: {
              baseAsset: { include: { portfolio: true, transactions: true } },
            },
          });

          const deletedBaseAsset = ctx.db.asset.delete({
            where: { id: args.where.id },
          });


          const dbTransactionResponse = await ctx.db.$transaction([
            deletedHistoricalValues,
            deletedAssetTransactions,
            deletedPrivateAsset,
            deletedBaseAsset,
          ]);


          const result = { ...dbTransactionResponse[2], historicalValues };


          return result;
        } else {
          throw new Error('An error occurred, no id was given.');
        }
      },
    });
    t.crud.updateOnePrivateAsset();
  },
});
