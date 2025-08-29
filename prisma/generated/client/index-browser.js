
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.30.3
 * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
 */
Prisma.prismaVersion = {
  client: "2.30.3",
  engine: "b8c35d44de987a9691890b3ddf3e2e7effb9bf20"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  name: 'name',
  email: 'email',
  password: 'password'
});

exports.Prisma.AssetScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  name: 'name',
  description: 'description',
  quantity: 'quantity',
  portfolioId: 'portfolioId'
});

exports.Prisma.PublicAssetScalarFieldEnum = makeEnum({
  id: 'id',
  symbol: 'symbol',
  market: 'market'
});

exports.Prisma.PrivateAssetScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.HistoricalValueScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  date: 'date',
  unitPrice: 'unitPrice',
  currency: 'currency',
  description: 'description',
  assetId: 'assetId'
});

exports.Prisma.PortfolioScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  name: 'name',
  description: 'description',
  userId: 'userId'
});

exports.Prisma.TransactionRecordScalarFieldEnum = makeEnum({
  id: 'id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  date: 'date',
  note: 'note',
  currency: 'currency',
  unitPrice: 'unitPrice',
  assetQuantity: 'assetQuantity',
  assetId: 'assetId',
  transactionType: 'transactionType'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.TransactionType = makeEnum({
  buy: 'buy',
  sell: 'sell'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Asset: 'Asset',
  PublicAsset: 'PublicAsset',
  PrivateAsset: 'PrivateAsset',
  HistoricalValue: 'HistoricalValue',
  Portfolio: 'Portfolio',
  TransactionRecord: 'TransactionRecord'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
