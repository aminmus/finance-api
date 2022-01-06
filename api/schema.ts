import { makeSchema } from 'nexus';
import { join } from 'path';
import { DateTime as DateTimeResolver } from 'nexus-prisma/scalars';
// import { DateTimeResolver } from 'graphql-scalars';
import { applyMiddleware } from 'graphql-middleware';

import * as nexusTypes from './graphql';
import permissions from './authorization/permissions';

const schema = applyMiddleware(
  makeSchema({
    types: [nexusTypes, DateTimeResolver],
    // plugins: [
    //   nexusPrisma({
    //     experimentalCRUD: true,
    //     scalars: {
    //       DateTime: DateTimeResolver,
    //     },
    //   }),
    // ],
    outputs: {
      typegen: join(process.cwd(), '.', 'nexus-typegen.ts'),
      schema: join(process.cwd(), '.', 'schema.graphql'),
    },
    contextType: {
      export: 'Context',
      module: join(__dirname, './types/context.ts'),
      alias: 'ContextModule',
    },
    sourceTypes: {
      modules: [{
        module: '@prisma/client',
        alias: 'prisma',
      }],
    },
  }),
  permissions,
);

export default schema;
