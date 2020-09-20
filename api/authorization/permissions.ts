import { shield } from 'nexus-plugin-shield';

import { isAuthenticated } from './rules';

const permissions = shield({
  rules: {
    Query: {
      portfolio: isAuthenticated,
      portfolios: isAuthenticated,
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
      updateOnePortfolio: isAuthenticated,
      updateOneHistoricalValue: isAuthenticated,
      updateOneUser: isAuthenticated,

      deleteOnePrivateAsset: isAuthenticated,
      deleteOnePublicAsset: isAuthenticated,
      deleteOnePortfolio: isAuthenticated,
      deleteOneHistoricalValue: isAuthenticated,

      makeTransaction: isAuthenticated,
    },
  },
});

export default permissions;
