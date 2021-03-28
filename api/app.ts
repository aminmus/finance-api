import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

import schema from './schema';

dotenv.config();

const app = express();

const apollo = new ApolloServer({
  schema,
  context: ({ req }) => ({
    prisma: new PrismaClient(),
    req,
  }),
});

apollo.applyMiddleware({ app });

app.listen(process.env.API_PORT, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:${process.env.API_PORT}/graphql`);
});
