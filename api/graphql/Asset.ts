import { schema } from "nexus"

schema.objectType({
  name: 'Asset',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.ticker();
    t.model.description();
    t.model.quantity();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.portfolioId();
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.asset();
    t.crud.assets();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAsset({
      computedInputs: {
        quantity: () => undefined,
      },
    });
    t.crud.deleteOneAsset();
    t.crud.updateOneAsset();
  },
});
