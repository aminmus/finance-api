import { use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import dotenv from 'dotenv';

dotenv.config()

use(prisma({ features: { crud: true } }));
