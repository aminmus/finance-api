import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';
import prismaClient from './prismaClient';

import schema from './schema';

dotenv.config();

const app = express();

const apollo = new ApolloServer({
  schema,
  context: ({ req }) => ({
    prisma: prismaClient,
    req,
  }),
});

apollo.applyMiddleware({ app });

app.listen(process.env.API_PORT, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:${process.env.API_PORT}/graphql`);
});
