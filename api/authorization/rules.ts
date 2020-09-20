import { rule } from 'nexus-plugin-shield';

import getUserToken from '../utils/getUserToken';

export const isAuthenticated = rule({ cache: 'contextual' })((_root, _args, ctx, _info) => {
  const userToken = getUserToken(ctx);
  return Boolean(userToken && userToken.userId);
});
