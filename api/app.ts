import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from "@prisma/client";
import createExpress from 'express';
import dotenv from 'dotenv';
dotenv.config()

import { schema } from './schema';
import permissions from './authorization/permissions';



const apollo = new ApolloServer({
  schema,
  context: {
    db: new PrismaClient(),
  }
});

const express = createExpress();

apollo.applyMiddleware({ app: express });

express.listen(process.env.API_PORT, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:${process.env.API_PORT}/graphql`);
});
