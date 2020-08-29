import { schema } from "nexus"

schema.objectType({
  name: 'CustomAsset',
  definition(t) {
    t.model.id();
    t.model.asset();
    t.model.historicalValues();
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.customAsset();
    t.crud.customAssets();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCustomAsset({
      computedInputs: {
        quantity: () => undefined, 
      }, 
    });
    t.crud.deleteOneCustomAsset();
    t.crud.updateOneCustomAsset();
  },
});
