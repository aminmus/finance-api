import { objectType, extendType } from 'nexus';
import bcrypt from 'bcrypt';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

// schema.extendType({
//   type: 'Query',
//   definition(t) {
//     t.crud.users();
//     t.crud.user();
//   },
// });

function hashPassword(password: string) { return bcrypt.hash(password, 10); }

export const UserMutation = extendType({
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
      },
    });
    t.crud.updateOneUser({
      async resolve(root, args, ctx, info, originalResolve) {
        const processedArgs = { ...args };
        if (args.data.password && args.data.password.set) {
          // Encrypt password before updating user
          const encryptedPassword = await hashPassword(args.data.password.set);
          processedArgs.data.password = { set: encryptedPassword };
        }
        const res = await originalResolve(root, processedArgs, ctx, info);
        return res;
      },
    });
  },
});
