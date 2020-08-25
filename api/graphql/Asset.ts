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
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.asset();
    t.crud.assets();
  },
});
