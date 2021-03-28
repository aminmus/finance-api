import { verify } from 'jsonwebtoken';
import { Context } from '../types/context';

import { IUserToken } from '../types/types';

/**
 * Get a decoded user token from JWT if one is given in the Authorization header
 *
 */
function getUserId(context: Context): IUserToken['userId'] | false {
  const Authorization = context.req.headers.authorization;
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    console.log(token);

    // Will throw error if token is not valid
    const decodedToken = verify(token, process.env.JWT_KEY as string) as IUserToken;

    return decodedToken.userId;
  }
  return false;
}

export default getUserId;
