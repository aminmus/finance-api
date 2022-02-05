import { rule } from 'graphql-shield';
import { Context } from '../types/context';

import getUserId from '../utils/getUserId';

export const isAuthenticated = rule({ cache: 'contextual' })((_root, _args, ctx: Context, _info) => Boolean(getUserId(ctx)));

export const isPortfolioOwner = rule({ cache: 'contextual' })((root, args, ctx: Context, _info) => ctx.req.user.id === root.owner.id);

// const realOwner = await ctx.prisma.portfolio.findUnique({ where: { id: portfolioId } }).owner();

// return realOwner?.id === userId;

// export const isAssetOwner = rule({ cache: 'contextual' })(async (_root, args, ctx: Context, _info) => {
//   const assetId = args.where.id;
//   const userId = getUserId(ctx);

//   const realOwner = await ctx.prisma.portfolio.findUnique({ where: { id: portfolioId } }).owner();

//   return realOwner?.id === userId;
// });
