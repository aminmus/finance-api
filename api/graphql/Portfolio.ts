import { objectType, extendType } from 'nexus';

export const Portfolio = objectType({
  name: 'Portfolio',
  definition(t) {
    t.model.id();
    t.model.updatedAt();
    t.model.createdAt();
    t.model.name();
    t.model.description();
    t.model.assets();
    t.model.owner();
  },
});

export const PortfolioQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.portfolio();
    t.crud.portfolios();
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
