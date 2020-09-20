import { verify } from 'jsonwebtoken';

import { IUserToken } from '../types'

/**
 * Get a decoded user token from JWT if one is given in the Authorization header
 *
 */
function getUserToken(context: NexusContext): IUserToken | false {
  const Authorization = context.req.headers.authorization;
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    console.log(token);

    // Will throw error if token is not valid
    const decodedToken = verify(token, process.env.JWT_KEY as string) as IUserToken;

    return decodedToken;
  }
  return false;
}

export default getUserToken;