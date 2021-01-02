import { objectType, extendType } from 'nexus';

export const PrivateAsset = objectType({
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

export const PrivateAssetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.privateAsset();
    t.crud.privateAssets();
  },
});

export const PrivateAssetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePrivateAsset();
    t.crud.deleteOnePrivateAsset({
      async resolve(_root, args, ctx, _info) {
        if (args.where.id) {

          const historicalValues = await ctx.prisma.historicalValue.findMany({
            where: { assetId: args.where.id },
          });

          const deletedHistoricalValues = ctx.prisma.historicalValue.deleteMany({
            where: { assetId: args.where.id },
          });

          const deletedAssetTransactions = ctx.prisma.transactionRecord.deleteMany({
            where: { assetId: args.where.id },
          });

          const deletedPrivateAsset = ctx.prisma.privateAsset.delete({
            where: { id: args.where.id },
            include: {
              baseAsset: { include: { portfolio: true, transactions: true } },
            },
          });

          const deletedBaseAsset = ctx.prisma.asset.delete({
            where: { id: args.where.id },
          });


          const dbTransactionResponse = await ctx.prisma.$transaction([
            deletedHistoricalValues,
            deletedAssetTransactions,
            deletedPrivateAsset,
            deletedBaseAsset,
          ]);


          const result = { ...prismaTransactionResponse[2], historicalValues };


          return result;
        } else {
          throw new Error('An error occurred, no id was given.');
        }
      },
    });
    t.crud.updateOnePrivateAsset();
  },
});
