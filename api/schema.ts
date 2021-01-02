import { makeSchema } from 'nexus';
import { join } from 'path';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { DateTimeResolver } from 'graphql-scalars';
import { applyMiddleware } from 'graphql-middleware';

import * as types from './graphql';
import permissions from './authorization/permissions';

export const schema =
  applyMiddleware(
    makeSchema({
      types,
      plugins: [
        nexusPrisma({
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
      contextType: {
        export: 'Context',
        module: join(__dirname, './types/context.ts'),
        alias: 'ContextModule',
      },
      sourceTypes: {
        modules: [{
          module: '@prisma/client',
          alias: "prisma",
        }]
      }
    }),
    permissions
  );
