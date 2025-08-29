import { Prisma } from '@prisma/client';
import dotenv from 'dotenv';
import prismaClient from './api/prismaClient';
import { hashPassword } from './api/utils/hashing';

dotenv.config();

const userSeedData: Prisma.UserCreateInput = {
  email: 'finance-guy@example.com',
  name: 'Finance Guy',
  password: process.env.SEED_USER_PASSWORD as string,
};

const portfolioSeedData: Prisma.PortfolioCreateInput = {
  name: 'Long-term portfolio',
  description: 'Mostly long-term investments',
  assets:
  {
    create: [{
      name: 'Investor B',
      quantity: 3,
      publicAsset: {
        create: {
          market: 'OMXSTO',
          symbol: 'INVE_B',
        },
      },
      transactions: {
        create: [
          {
            transactionType: 'buy',
            assetQuantity: 2,
            currency: 'SEK',
            unitPrice: 217,
            date: new Date('2022-01-05 13:00:00'),
          },
          {
            transactionType: 'sell',
            assetQuantity: 1,
            currency: 'SEK',
            unitPrice: 220,
            date: new Date('2022-01-06 14:36:23'),
            note: 'Buying back at cheaper hopefully',
          },
          {
            transactionType: 'buy',
            assetQuantity: 1,
            currency: 'SEK',
            unitPrice: 210,
            date: new Date('2022-01-12 10:15:00'),
            note: 'Buying some more for this month',
          },
        ],
      },
    },
    {
      name: 'Loan - Joe',
      quantity: 5500,
      description: 'Loan from me to Joe',
      privateAsset: {
        create: {},
      },
      transactions: {
        create: [{
          assetQuantity: 5500,
          currency: 'SEK',
          transactionType: 'buy',
          unitPrice: 1,
          date: new Date('2021-09-15'),
          note: 'I lent out some money to Joe, he will pay me back within 6 months',
        },
        {
          assetQuantity: 3000,
          currency: 'SEK',
          transactionType: 'sell',
          unitPrice: 1,
          date: new Date('2022-01-10'),
          note: 'Partial repayment from Joe',
        }],
      },
    },
    {
      name: 'My private consulting firm stock',
      quantity: 51,
      description: 'Stocks for my private consulting firm. Total amount of stocks issued is currently 100',
      transactions: {},
      privateAsset: {
        create: {
          historicalValues: {
            create: {
              unitPrice: 10000,
              currency: 'SEK',
              date: new Date('2021-11-28'),
            },
          },
        },
      },
    },
    ],
  },
  owner: { connect: { email: userSeedData.email } },
} as Prisma.PortfolioCreateInput;

async function seedUser(userData: Prisma.UserCreateInput) {
  return prismaClient.user.create({
    data: {
      ...userData,
      password: await hashPassword(userData.password),
    },
  });
}

async function seedPortfolio(portfolioData: Prisma.PortfolioCreateInput) {
  return prismaClient.portfolio.create({
    data: portfolioData,
    include: {
      assets: {
        include: {
          privateAsset: { include: { historicalValues: true } },
          publicAsset: true,
          transactions: true,
        },
      },
    },
  });
}

async function main() {
  try {
    const user = await seedUser(userSeedData);
    const portfolio = await seedPortfolio(portfolioSeedData);

    console.log('Seeded: ', { user, portfolio });
  } catch (error) {
    console.error(error);
  } finally {
    prismaClient.$disconnect();
  }
}

main();
