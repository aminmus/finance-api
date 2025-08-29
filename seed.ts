import dotenv from 'dotenv';
import prismaClient from './api/prismaClient';
import { hashPassword } from './api/utils/hashing';

dotenv.config();

const userSeedData = {
  email: 'finance-guy@example.com',
  name: 'Finance Guy',
  password: process.env.SEED_USER_PASSWORD as string,
};

const portfolioSeedData = {
  name: 'Long-term portfolio',
  description: 'Mostly long-term investments',
  assets: {
    create: [
      {
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
          create: [
            {
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
            },
          ],
        },
      },
      {
        name: 'My private consulting firm stock',
        quantity: 51,
        description:
          'Stocks for my private consulting firm. Total amount of stocks issued is currently 100',
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
      {
        name: 'Investor A',
        quantity: 5,
        publicAsset: {
          create: {
            market: 'OMXSTO',
            symbol: 'INVE_A',
          },
        },
        transactions: {},
      },
      {
        name: 'Vintage Car',
        quantity: 1,
        description: 'Car with purchase and valuation history',
        privateAsset: {
          create: {
            historicalValues: {
              create: [
                {
                  unitPrice: 200000,
                  currency: 'SEK',
                  date: new Date('2021-07-01'),
                  description: 'Purchase price',
                },
                {
                  unitPrice: 250000,
                  currency: 'SEK',
                  date: new Date('2023-01-01'),
                  description: 'New appraisal',
                },
              ],
            },
          },
        },
        transactions: {
          create: [
            {
              transactionType: 'buy',
              assetQuantity: 1,
              currency: 'SEK',
              unitPrice: 200000,
              date: new Date('2021-07-01'),
              note: 'Bought the car',
            },
          ],
        },
      },
    ],
  },
  owner: { connect: { email: userSeedData.email } },
};

async function seedUser(userData: typeof userSeedData) {
  return prismaClient.user.create({
    data: {
      ...userData,
      password: await hashPassword(userData.password),
    },
  });
}

async function seedPortfolio(portfolioData: typeof portfolioSeedData) {
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
