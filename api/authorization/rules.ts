import { rule } from 'nexus-plugin-shield';

import getUserId from '../utils/getUserId';

export const isAuthenticated = rule({ cache: 'contextual' })((_root, _args, ctx, _info) => {
  return Boolean(getUserId(ctx));
});

export const isPortfolioOwner = rule({ cache: 'contextual' })(async (_root, args, ctx: NexusContext, _info) => {
  const portfolioId = args.where.id;
  const userId = getUserId(ctx);

  const realOwner = await ctx.db.portfolio.findOne({ where: { id: portfolioId } }).owner();

  return realOwner?.id === userId
});