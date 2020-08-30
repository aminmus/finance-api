import { schema } from "nexus"

schema.objectType({
  name: 'PublicAsset',
  description: 'Publicly traded asset. For assets that are traded in a known and supported public market.',
  definition(t) {
    t.model.id();
    t.model.symbol();
    t.model.market();

  }
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.publicAsset();
    t.crud.publicAssets();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePublicAsset();
    t.crud.deleteOnePublicAsset();
    t.crud.updateOnePublicAsset();
  },
});
