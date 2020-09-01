import { schema } from "nexus";

schema.objectType({
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

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.portfolio();
    t.crud.portfolios();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePortfolio();
    t.crud.deleteOnePortfolio();
    t.crud.updateOnePortfolio();
  },
});
