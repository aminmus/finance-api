import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
// import { PrismaClient } from '@prisma/client';
import prismaClient from './prismaClient';

import schema from './schema';
import authenticateUser from './authenticationMiddleware';

dotenv.config();

const app = express();

app.use(authenticateUser);

const playgroundQuery = fs.readFileSync(
  path.join(__dirname, '..', 'playground', 'requests.graphql'),
  'utf8',
);

const apollo = new ApolloServer({
  schema,
  context: ({ req }) => ({
    prisma: prismaClient,
    req,
  }),
  playground: {
    tabs: [
      {
        endpoint: '/graphql',
        query: playgroundQuery,
      },
    ],
  },
});

apollo.applyMiddleware({ app });

app.listen(process.env.API_PORT, () => {
  console.log(
    `🚀 GraphQL service ready at http://localhost:${process.env.API_PORT}/graphql`,
  );
});
