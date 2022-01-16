import { Prisma } from '@prisma/client';
import prismaClient from './api/prismaClient';
import { hashPassword } from './api/utils/hashing';

const userSeedData = {
  email: 'finance-guy@example.com',
  name: 'Finance Guy',
  password: process.env.SEED_USER_PASSWORD,
} as Prisma.UserCreateInput;

async function seedUser(userData: Prisma.UserCreateInput) {
  return prismaClient.user.create({
    data: {
      ...userData,
      password: await hashPassword(userData.password),
    },
  });
}

async function main() {
  const user = await seedUser(userSeedData);
  console.log('Seeded: ', { user });
  prismaClient.$disconnect();
}

main();
