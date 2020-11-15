import { makeSchema } from '@nexus/schema';
import { join } from 'path';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { DateTimeResolver } from 'graphql-scalars';
import { applyMiddleware } from 'graphql-middleware';

import * as types from './graphql';
import permissions from './authorization/permissions';

export const schema = applyMiddleware(makeSchema({

  types,
  plugins: [
    nexusSchemaPrisma({
    experimentalCRUD: true,
    scalars: {
      DateTime: DateTimeResolver,
    },
  }),
],
  outputs: {
    typegen: join(process.cwd(), '..', 'nexus-typegen.ts'),
    schema: join(process.cwd(), '..', 'schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'ContextModule.Context',
    sources: [{
      source: join(__dirname, './types/context.ts'),
      alias: 'ContextModule',
    },
    {

      source: '@prisma/client',
      alias: "prisma",
    }
  ],
  },
// }), permissions);
}));
