import { objectType } from 'nexus';
import { Asset } from 'nexus-prisma';

// eslint-disable-next-line import/prefer-default-export
export const AssetObject = objectType({
  name: Asset.$name,
  definition(t) {
    t.field(Asset.id);
    t.field(Asset.name)
    t.field(Asset.description)
    t.field(Asset.quantity)
    t.field(Asset.createdAt)
    t.field(Asset.updatedAt)
    t.field(Asset.portfolioId)
  },
});

// schema.extendType({
//   type: 'Query',
//   definition(t) {
//     t.crud.asset();
//     t.crud.assets();
//   },
// });
