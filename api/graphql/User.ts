import { schema } from "nexus"
import bcrypt from "bcrypt";

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.users();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser({
      async resolve(root, args, ctx, info, originalResolve) {
        // Encrypts password before saving user
        const encryptedPassword = await bcrypt.hash(args.data.password, 10);
        const processedArgs = { data: { ...args.data, password: encryptedPassword } };
        const res = await originalResolve(root, processedArgs, ctx, info);
        return res;
      }
    });
  },
});