import { objectType, extendType } from 'nexus';

export const Portfolio = objectType({
  name: 'Portfolio',
  definition(t) {
    t.model.id();
    t.model.updatedAt();
    t.model.createdAt();
    t.model.name();
    t.model.description();
    t.model.owner();
    t.list.field('privateAssets', {
      type: 'PrivateAsset',
      resolve: (root, args, ctx) => ctx.prisma.privateAsset.findMany({
        where: { baseAsset: { portfolioId: { equals: root.id } } },
        include: {
          baseAsset: {
            include: { transactions: true },
          },
        },
      }),
    });
    t.list.field('publicAssets', {
      type: 'PublicAsset',
      resolve: (root, args, ctx) => ctx.prisma.publicAsset.findMany({
        where: { baseAsset: { portfolioId: { equals: root.id } } },
        include: {
          baseAsset: true,
        },
      }),
    });
  },
});

export const PortfolioQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.portfolio();
    t.list.field('myPortfolios', {
      type: 'Portfolio',
      resolve: (root, args, ctx) => {
        const portfolios = ctx.prisma.portfolio.findMany({
          where: { owner: { id: { equals: ctx.req.user.id } } },
          include: {
            assets: {
              include:
                { privateAsset: { include: { historicalValues: true } }, publicAsset: true },
            },
          },
        });
        return portfolios;
      },
    });
  },
});

export const PortfolioMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePortfolio();
    t.crud.deleteOnePortfolio();
    t.crud.updateOnePortfolio();
  },
});
