import { schema } from 'nexus';

schema.objectType({
  name: 'HistoricalValue',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.date();
    t.model.assetId();
    t.model.unitPrice();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneHistoricalValue();
    t.crud.updateOneHistoricalValue();
    t.crud.deleteOneHistoricalValue();
  },
});
