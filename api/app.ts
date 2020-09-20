import { use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import dotenv from 'dotenv';

import permissions from './authorization/permissions';

dotenv.config()

// Nexus plugins
use(prisma({ features: { crud: true } }));
use(permissions);
