import { objectType, extendType, stringArg, nonNull } from "nexus";
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', { type: 'User' });
  },
});

export const AuthPayloadMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx, _info) {
        const user = await ctx.db.user.findUnique({ where: { email: args.email } });
        if (user) {
          const passwordIsValid = await compare(args.password, user.password);
          if (passwordIsValid) {
            return {
              user,
              token: jwt.sign({ userId: user.id }, process.env.JWT_KEY as string, { expiresIn: '24h' }),
            }
          } else {
            throw new Error('Incorrect password');
          }
        } else {
          throw new Error('User not found');
        }
      }
    });
  },
});
