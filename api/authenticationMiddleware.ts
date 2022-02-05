import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import prisma from './prismaClient';
import { IUserToken } from './types/types';

function getUserById(userId: number) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

/**
 * Adds user object to request if given a valid token to Authorization header
 */
async function authenticateUser(req: Request, res: Response, next: NextFunction):
Promise<Response | void> {
  const Authorization = req.headers.authorization;

  if (!Authorization) {
    return next();
  }

  try {
    const token = Authorization.replace('Bearer ', '');
    const decodedToken = verify(token, process.env.JWT_KEY as string) as IUserToken;
    const user = await getUserById(decodedToken.userId);

    if (!user) {
      return next();
    }

    req.user = user;

    return next();
  } catch (error) {
    return next();
  }
}

export default authenticateUser;
