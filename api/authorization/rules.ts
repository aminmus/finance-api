import { rule } from 'graphql-shield';
import { Context } from '../types/context';

import getUserId from '../utils/getUserId';

export const isAuthenticated = rule({ cache: 'contextual' })((_root, _args, ctx: Context, _info) => Boolean(getUserId(ctx)));

export const isPortfolioOwner = rule({ cache: 'contextual' })(async (_root, args, ctx: Context, _info) => {
  const portfolioId = args.where.id;

  const portfolioOwner = await ctx.prisma.portfolio
    .findUnique({ where: { id: portfolioId } })
    .owner();

  if (!portfolioOwner) return false;

  return portfolioOwner.id === ctx.req.user.id;
});
