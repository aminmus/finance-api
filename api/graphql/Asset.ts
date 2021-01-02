import { objectType } from 'nexus';

export const Asset = objectType({
  name: 'Asset',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.quantity();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.portfolioId();
  },
});

// schema.extendType({
//   type: 'Query',
//   definition(t) {
//     t.crud.asset();
//     t.crud.assets();
//   },
// });
