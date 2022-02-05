import { shield, chain } from 'graphql-shield';

import { isAuthenticated, isPortfolioOwner } from './rules';

const permissions = shield({
  Query: {
    portfolio: isAuthenticated,
    myPortfolios: isAuthenticated,
    privateAsset: isAuthenticated,
    privateAssets: isAuthenticated,
    publicAsset: isAuthenticated,
    publicAssets: isAuthenticated,
  },
  Mutation: {
    // is authenticated
    createOnePrivateAsset: isAuthenticated,
    createOnePublicAsset: isAuthenticated,
    createOnePortfolio: isAuthenticated,
    createOneHistoricalValue: isAuthenticated,

    // is authenticated and is owner
    updateOnePrivateAsset: isAuthenticated,
    updateOnePublicAsset: isAuthenticated,
    updateOnePortfolio: chain(isAuthenticated, isPortfolioOwner),
    updateOneHistoricalValue: isAuthenticated,
    updateOneUser: isAuthenticated,

    deleteOnePrivateAsset: isAuthenticated,
    deleteOnePublicAsset: isAuthenticated,
    deleteOnePortfolio: chain(isAuthenticated, isPortfolioOwner),
    deleteOneHistoricalValue: isAuthenticated,

    makeTransaction: isAuthenticated,
  },
});

export default permissions;
