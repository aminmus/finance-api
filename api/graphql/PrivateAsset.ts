import { schema } from "nexus"

schema.objectType({
  name: 'PrivateAsset',
  description: 'Privately traded asset. For assets that are not traded on a supported public market.',
  definition(t) {
    t.model.id();
    t.model.asset();
    t.model.historicalValues();
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
    t.crud.deleteOnePrivateAsset();
    t.crud.updateOnePrivateAsset();
  },
});
