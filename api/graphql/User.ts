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
    t.crud.user();
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.deleteOneUser();
    t.crud.createOneUser({
      async resolve(root, args, ctx, info, originalResolve) {
        // Encrypt password before saving user
        const encryptedPassword = await hashPassword(args.data.password);
        const processedArgs = { data: { ...args.data, password: encryptedPassword } };
        const res = await originalResolve(root, processedArgs, ctx, info);
        return res;
      }
    });
    t.crud.updateOneUser({
      async resolve(root, args, ctx, info, originalResolve) {
        const processedArgs = { ...args };
        if (args.data.password) {
          // Encrypt password before updating user
          const encryptedPassword = await hashPassword(args.data.password);
          processedArgs.data.password = encryptedPassword;
        }
        const res = await originalResolve(root, processedArgs, ctx, info);
        return res;
      }
    });
  },
});

const hashPassword = (password: string) => bcrypt.hash(password, 10);