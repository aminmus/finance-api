import { schema } from "nexus";

schema.objectType({
  name: 'Transaction',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.date();
    t.model.note();
    t.model.currency();
    t.model.unitPrice();
    t.model.totalPrice();
    t.model.assetQuantity();
    t.model.asset();
  },
});
