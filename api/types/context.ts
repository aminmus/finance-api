import { Request } from "express";
import { PrismaClient } from '@prisma/client'

export type Context = {
  req: Request,
  prisma: PrismaClient,
}; 
