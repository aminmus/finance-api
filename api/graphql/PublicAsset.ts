import { objectType, extendType } from 'nexus';

export const PublicAsset = objectType({
  name: 'PublicAsset',
  description:
    'Publicly traded asset. For assets that are traded in a known and supported public market.',
  definition(t) {
    t.model.id();
    t.model.symbol();
    t.model.market();
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
  },
});

export const PublicAssetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.publicAsset();
    t.crud.publicAssets();
  },
});

export const PublicAssetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePublicAsset();
    t.crud.deleteOnePublicAsset({
      async resolve(_root, args, ctx, _info) {
        if (args.where.id) {
          // 1. delete public asset
          const deletePublicAsset = ctx.db.publicAsset.delete({
            where: { id: args.where.id },
            include: {
              baseAsset: { include: { portfolio: true, transactions: true } },
            },
          });
          // 2. delete asset transactions
          const deleteAssetTransactions = ctx.db.transactionRecord.deleteMany({
            where: { assetId: args.where.id },
          });
          // 3. delete asset
          const deletedBaseAsset = ctx.db.asset.delete({
            where: { id: args.where.id },
          });

          const dbTransactionResponse = await ctx.db.$transaction([
            deletePublicAsset,
            deleteAssetTransactions,
            deletedBaseAsset,
          ]);

          return dbTransactionResponse[0];
        } else {
          throw new Error('An error occurred, no id was given.');
        }
      },
    });
    t.crud.updateOnePublicAsset();
  },
});
