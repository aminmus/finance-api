import { objectType, extendType } from '@nexus/schema';

export const HistoricalValue = objectType({
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

export const HistoricalValueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneHistoricalValue();
    t.crud.updateOneHistoricalValue();
    t.crud.deleteOneHistoricalValue();
  },
});
