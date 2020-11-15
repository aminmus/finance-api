import { objectType, extendType, arg } from "@nexus/schema";
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token', { nullable: false });
    t.field('user', { type: 'User', nullable: false });
  },
});

export const AuthPayloadMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: arg({
          type: "String",
          required: true,
        }),
        password: arg({
          type: "String",
          required: true,
        }),
      },
      async resolve(_root, args, ctx, _info) {
        const user = await ctx.db.user.findOne({ where: { email: args.email } });
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
