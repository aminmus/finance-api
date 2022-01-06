import { objectType, extendType } from 'nexus';
import { HistoricalValue } from 'nexus-prisma';

export const HistoricalValueObject = objectType({
  name: HistoricalValue.$name,
  definition(t) {
    t.field(HistoricalValue.id);
    t.field(HistoricalValue.createdAt);
    t.field(HistoricalValue.updatedAt);
    t.field(HistoricalValue.date);
    t.field(HistoricalValue.assetId);
    t.field(HistoricalValue.unitPrice);
  },
});

export const HistoricalValueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // t.crud.createOneHistoricalValue();
    // t.crud.updateOneHistoricalValue();
    // t.crud.deleteOneHistoricalValue();
  },
});
