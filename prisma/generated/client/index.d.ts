
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: number
  updatedAt: Date
  createdAt: Date
  name: string
  email: string
  password: string
}

/**
 * Model Asset
 */

export type Asset = {
  id: number
  updatedAt: Date
  createdAt: Date
  name: string
  description: string | null
  quantity: number
  portfolioId: number
}

/**
 * Model PublicAsset
 */

export type PublicAsset = {
  id: number
  symbol: string | null
  market: string | null
}

/**
 * Model PrivateAsset
 */

export type PrivateAsset = {
  id: number
}

/**
 * Model HistoricalValue
 */

export type HistoricalValue = {
  id: number
  updatedAt: Date
  createdAt: Date
  date: Date
  unitPrice: number
  currency: string
  description: string | null
  assetId: number
}

/**
 * Model Portfolio
 */

export type Portfolio = {
  id: number
  updatedAt: Date
  createdAt: Date
  name: string
  description: string | null
  userId: number
}

/**
 * Model TransactionRecord
 */

export type TransactionRecord = {
  id: number
  updatedAt: Date
  createdAt: Date
  date: Date
  note: string | null
  currency: string
  unitPrice: number
  assetQuantity: number
  assetId: number
  transactionType: TransactionType
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const TransactionType: {
  buy: 'buy',
  sell: 'sell'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<GlobalReject>;

  /**
   * `prisma.publicAsset`: Exposes CRUD operations for the **PublicAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicAssets
    * const publicAssets = await prisma.publicAsset.findMany()
    * ```
    */
  get publicAsset(): Prisma.PublicAssetDelegate<GlobalReject>;

  /**
   * `prisma.privateAsset`: Exposes CRUD operations for the **PrivateAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateAssets
    * const privateAssets = await prisma.privateAsset.findMany()
    * ```
    */
  get privateAsset(): Prisma.PrivateAssetDelegate<GlobalReject>;

  /**
   * `prisma.historicalValue`: Exposes CRUD operations for the **HistoricalValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricalValues
    * const historicalValues = await prisma.historicalValue.findMany()
    * ```
    */
  get historicalValue(): Prisma.HistoricalValueDelegate<GlobalReject>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<GlobalReject>;

  /**
   * `prisma.transactionRecord`: Exposes CRUD operations for the **TransactionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionRecords
    * const transactionRecords = await prisma.transactionRecord.findMany()
    * ```
    */
  get transactionRecord(): Prisma.TransactionRecordDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.30.3
   * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Asset: 'Asset',
    PublicAsset: 'PublicAsset',
    PrivateAsset: 'PrivateAsset',
    HistoricalValue: 'HistoricalValue',
    Portfolio: 'Portfolio',
    TransactionRecord: 'TransactionRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    portfolios?: boolean | PortfolioFindManyArgs
  }

  export type UserInclude = {
    portfolios?: boolean | PortfolioFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'portfolios'
        ? Array < PortfolioGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'portfolios'
        ? Array < PortfolioGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    portfolios<T extends PortfolioFindManyArgs = {}>(args?: Subset<T, PortfolioFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Portfolio>>, PrismaPromise<Array<PortfolioGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Asset
   */


  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
    max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    portfolioId: number | null
  }

  export type AssetSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    portfolioId: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    description: string | null
    quantity: number | null
    portfolioId: number | null
  }

  export type AssetMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    description: string | null
    quantity: number | null
    portfolioId: number | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    name: number
    description: number
    quantity: number
    portfolioId: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    id?: true
    quantity?: true
    portfolioId?: true
  }

  export type AssetSumAggregateInputType = {
    id?: true
    quantity?: true
    portfolioId?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    quantity?: true
    portfolioId?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    quantity?: true
    portfolioId?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    quantity?: true
    portfolioId?: true
    _all?: true
  }

  export type AssetAggregateArgs = {
    /**
     * Filter which Asset to aggregate.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }


    
    
  export type AssetGroupByArgs = {
    where?: AssetWhereInput
    orderBy?: Enumerable<AssetOrderByInput>
    by: Array<AssetScalarFieldEnum>
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }


  export type AssetGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    name: string
    description: string | null
    quantity: number
    portfolioId: number
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Promise<
    Array<
      PickArray<AssetGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AssetGroupByOutputType[P]> 
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      > 
    >


  export type AssetSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    portfolio?: boolean | PortfolioArgs
    portfolioId?: boolean
    transactions?: boolean | TransactionRecordFindManyArgs
    privateAsset?: boolean | PrivateAssetArgs
    publicAsset?: boolean | PublicAssetArgs
  }

  export type AssetInclude = {
    portfolio?: boolean | PortfolioArgs
    transactions?: boolean | TransactionRecordFindManyArgs
    privateAsset?: boolean | PrivateAssetArgs
    publicAsset?: boolean | PublicAssetArgs
  }

  export type AssetGetPayload<
    S extends boolean | null | undefined | AssetArgs,
    U = keyof S
      > = S extends true
        ? Asset
    : S extends undefined
    ? never
    : S extends AssetArgs | AssetFindManyArgs
    ?'include' extends U
    ? Asset  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'portfolio'
        ? PortfolioGetPayload<S['include'][P]> :
        P extends 'transactions'
        ? Array < TransactionRecordGetPayload<S['include'][P]>>  :
        P extends 'privateAsset'
        ? PrivateAssetGetPayload<S['include'][P]> | null :
        P extends 'publicAsset'
        ? PublicAssetGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Asset ?Asset [P]
  : 
          P extends 'portfolio'
        ? PortfolioGetPayload<S['select'][P]> :
        P extends 'transactions'
        ? Array < TransactionRecordGetPayload<S['select'][P]>>  :
        P extends 'privateAsset'
        ? PrivateAssetGetPayload<S['select'][P]> | null :
        P extends 'publicAsset'
        ? PublicAssetGetPayload<S['select'][P]> | null : never
  } 
    : Asset
  : Asset


  type AssetCountArgs = Merge<
    Omit<AssetFindManyArgs, 'select' | 'include'> & {
      select?: AssetCountAggregateInputType | true
    }
  >

  export interface AssetDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AssetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Asset'> extends True ? CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>> : CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AssetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Asset'> extends True ? CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>> : CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssetFindManyArgs>(
      args?: SelectSubset<T, AssetFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Asset>>, PrismaPromise<Array<AssetGetPayload<T>>>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
    **/
    create<T extends AssetCreateArgs>(
      args: SelectSubset<T, AssetCreateArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Create many Assets.
     *     @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     *     @example
     *     // Create many Assets
     *     const asset = await prisma.asset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetCreateManyArgs>(
      args?: SelectSubset<T, AssetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
    **/
    delete<T extends AssetDeleteArgs>(
      args: SelectSubset<T, AssetDeleteArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetUpdateArgs>(
      args: SelectSubset<T, AssetUpdateArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetDeleteManyArgs>(
      args?: SelectSubset<T, AssetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetUpdateManyArgs>(
      args: SelectSubset<T, AssetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
    **/
    upsert<T extends AssetUpsertArgs>(
      args: SelectSubset<T, AssetUpsertArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AssetClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    portfolio<T extends PortfolioArgs = {}>(args?: Subset<T, PortfolioArgs>): CheckSelect<T, Prisma__PortfolioClient<Portfolio | null >, Prisma__PortfolioClient<PortfolioGetPayload<T> | null >>;

    transactions<T extends TransactionRecordFindManyArgs = {}>(args?: Subset<T, TransactionRecordFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TransactionRecord>>, PrismaPromise<Array<TransactionRecordGetPayload<T>>>>;

    privateAsset<T extends PrivateAssetArgs = {}>(args?: Subset<T, PrivateAssetArgs>): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset | null >, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T> | null >>;

    publicAsset<T extends PublicAssetArgs = {}>(args?: Subset<T, PublicAssetArgs>): CheckSelect<T, Prisma__PublicAssetClient<PublicAsset | null >, Prisma__PublicAssetClient<PublicAssetGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Throw an Error if a Asset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Asset to fetch.
     * 
    **/
    where: AssetWhereUniqueInput
  }


  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Throw an Error if a Asset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Asset to fetch.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     * 
    **/
    distinct?: Enumerable<AssetScalarFieldEnum>
  }


  /**
   * Asset findMany
   */
  export type AssetFindManyArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter, which Assets to fetch.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AssetScalarFieldEnum>
  }


  /**
   * Asset create
   */
  export type AssetCreateArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The data needed to create a Asset.
     * 
    **/
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }


  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs = {
    data: Enumerable<AssetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Asset update
   */
  export type AssetUpdateArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The data needed to update a Asset.
     * 
    **/
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     * 
    **/
    where: AssetWhereUniqueInput
  }


  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs = {
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    where?: AssetWhereInput
  }


  /**
   * Asset upsert
   */
  export type AssetUpsertArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The filter to search for the Asset to update in case it exists.
     * 
    **/
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     * 
    **/
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }


  /**
   * Asset delete
   */
  export type AssetDeleteArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter which Asset to delete.
     * 
    **/
    where: AssetWhereUniqueInput
  }


  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs = {
    where?: AssetWhereInput
  }


  /**
   * Asset without action
   */
  export type AssetArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
  }



  /**
   * Model PublicAsset
   */


  export type AggregatePublicAsset = {
    _count: PublicAssetCountAggregateOutputType | null
    count: PublicAssetCountAggregateOutputType | null
    _avg: PublicAssetAvgAggregateOutputType | null
    avg: PublicAssetAvgAggregateOutputType | null
    _sum: PublicAssetSumAggregateOutputType | null
    sum: PublicAssetSumAggregateOutputType | null
    _min: PublicAssetMinAggregateOutputType | null
    min: PublicAssetMinAggregateOutputType | null
    _max: PublicAssetMaxAggregateOutputType | null
    max: PublicAssetMaxAggregateOutputType | null
  }

  export type PublicAssetAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicAssetSumAggregateOutputType = {
    id: number | null
  }

  export type PublicAssetMinAggregateOutputType = {
    id: number | null
    symbol: string | null
    market: string | null
  }

  export type PublicAssetMaxAggregateOutputType = {
    id: number | null
    symbol: string | null
    market: string | null
  }

  export type PublicAssetCountAggregateOutputType = {
    id: number
    symbol: number
    market: number
    _all: number
  }


  export type PublicAssetAvgAggregateInputType = {
    id?: true
  }

  export type PublicAssetSumAggregateInputType = {
    id?: true
  }

  export type PublicAssetMinAggregateInputType = {
    id?: true
    symbol?: true
    market?: true
  }

  export type PublicAssetMaxAggregateInputType = {
    id?: true
    symbol?: true
    market?: true
  }

  export type PublicAssetCountAggregateInputType = {
    id?: true
    symbol?: true
    market?: true
    _all?: true
  }

  export type PublicAssetAggregateArgs = {
    /**
     * Filter which PublicAsset to aggregate.
     * 
    **/
    where?: PublicAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PublicAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAssets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicAssets
    **/
    _count?: true | PublicAssetCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PublicAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicAssetAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PublicAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicAssetSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PublicAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicAssetMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PublicAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicAssetMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PublicAssetMaxAggregateInputType
  }

  export type GetPublicAssetAggregateType<T extends PublicAssetAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicAsset[P]>
      : GetScalarType<T[P], AggregatePublicAsset[P]>
  }


    
    
  export type PublicAssetGroupByArgs = {
    where?: PublicAssetWhereInput
    orderBy?: Enumerable<PublicAssetOrderByInput>
    by: Array<PublicAssetScalarFieldEnum>
    having?: PublicAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicAssetCountAggregateInputType | true
    _avg?: PublicAssetAvgAggregateInputType
    _sum?: PublicAssetSumAggregateInputType
    _min?: PublicAssetMinAggregateInputType
    _max?: PublicAssetMaxAggregateInputType
  }


  export type PublicAssetGroupByOutputType = {
    id: number
    symbol: string | null
    market: string | null
    _count: PublicAssetCountAggregateOutputType | null
    _avg: PublicAssetAvgAggregateOutputType | null
    _sum: PublicAssetSumAggregateOutputType | null
    _min: PublicAssetMinAggregateOutputType | null
    _max: PublicAssetMaxAggregateOutputType | null
  }

  type GetPublicAssetGroupByPayload<T extends PublicAssetGroupByArgs> = Promise<
    Array<
      PickArray<PublicAssetGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PublicAssetGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PublicAssetGroupByOutputType[P]> 
            : GetScalarType<T[P], PublicAssetGroupByOutputType[P]>
        }
      > 
    >


  export type PublicAssetSelect = {
    id?: boolean
    baseAsset?: boolean | AssetArgs
    symbol?: boolean
    market?: boolean
  }

  export type PublicAssetInclude = {
    baseAsset?: boolean | AssetArgs
  }

  export type PublicAssetGetPayload<
    S extends boolean | null | undefined | PublicAssetArgs,
    U = keyof S
      > = S extends true
        ? PublicAsset
    : S extends undefined
    ? never
    : S extends PublicAssetArgs | PublicAssetFindManyArgs
    ?'include' extends U
    ? PublicAsset  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'baseAsset'
        ? AssetGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PublicAsset ?PublicAsset [P]
  : 
          P extends 'baseAsset'
        ? AssetGetPayload<S['select'][P]> : never
  } 
    : PublicAsset
  : PublicAsset


  type PublicAssetCountArgs = Merge<
    Omit<PublicAssetFindManyArgs, 'select' | 'include'> & {
      select?: PublicAssetCountAggregateInputType | true
    }
  >

  export interface PublicAssetDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PublicAsset that matches the filter.
     * @param {PublicAssetFindUniqueArgs} args - Arguments to find a PublicAsset
     * @example
     * // Get one PublicAsset
     * const publicAsset = await prisma.publicAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicAssetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicAssetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicAsset'> extends True ? CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>> : CheckSelect<T, Prisma__PublicAssetClient<PublicAsset | null >, Prisma__PublicAssetClient<PublicAssetGetPayload<T> | null >>

    /**
     * Find the first PublicAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetFindFirstArgs} args - Arguments to find a PublicAsset
     * @example
     * // Get one PublicAsset
     * const publicAsset = await prisma.publicAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicAssetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicAssetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicAsset'> extends True ? CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>> : CheckSelect<T, Prisma__PublicAssetClient<PublicAsset | null >, Prisma__PublicAssetClient<PublicAssetGetPayload<T> | null >>

    /**
     * Find zero or more PublicAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicAssets
     * const publicAssets = await prisma.publicAsset.findMany()
     * 
     * // Get first 10 PublicAssets
     * const publicAssets = await prisma.publicAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicAssetWithIdOnly = await prisma.publicAsset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicAssetFindManyArgs>(
      args?: SelectSubset<T, PublicAssetFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PublicAsset>>, PrismaPromise<Array<PublicAssetGetPayload<T>>>>

    /**
     * Create a PublicAsset.
     * @param {PublicAssetCreateArgs} args - Arguments to create a PublicAsset.
     * @example
     * // Create one PublicAsset
     * const PublicAsset = await prisma.publicAsset.create({
     *   data: {
     *     // ... data to create a PublicAsset
     *   }
     * })
     * 
    **/
    create<T extends PublicAssetCreateArgs>(
      args: SelectSubset<T, PublicAssetCreateArgs>
    ): CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>>

    /**
     * Create many PublicAssets.
     *     @param {PublicAssetCreateManyArgs} args - Arguments to create many PublicAssets.
     *     @example
     *     // Create many PublicAssets
     *     const publicAsset = await prisma.publicAsset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicAssetCreateManyArgs>(
      args?: SelectSubset<T, PublicAssetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PublicAsset.
     * @param {PublicAssetDeleteArgs} args - Arguments to delete one PublicAsset.
     * @example
     * // Delete one PublicAsset
     * const PublicAsset = await prisma.publicAsset.delete({
     *   where: {
     *     // ... filter to delete one PublicAsset
     *   }
     * })
     * 
    **/
    delete<T extends PublicAssetDeleteArgs>(
      args: SelectSubset<T, PublicAssetDeleteArgs>
    ): CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>>

    /**
     * Update one PublicAsset.
     * @param {PublicAssetUpdateArgs} args - Arguments to update one PublicAsset.
     * @example
     * // Update one PublicAsset
     * const publicAsset = await prisma.publicAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicAssetUpdateArgs>(
      args: SelectSubset<T, PublicAssetUpdateArgs>
    ): CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>>

    /**
     * Delete zero or more PublicAssets.
     * @param {PublicAssetDeleteManyArgs} args - Arguments to filter PublicAssets to delete.
     * @example
     * // Delete a few PublicAssets
     * const { count } = await prisma.publicAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicAssetDeleteManyArgs>(
      args?: SelectSubset<T, PublicAssetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicAssets
     * const publicAsset = await prisma.publicAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicAssetUpdateManyArgs>(
      args: SelectSubset<T, PublicAssetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicAsset.
     * @param {PublicAssetUpsertArgs} args - Arguments to update or create a PublicAsset.
     * @example
     * // Update or create a PublicAsset
     * const publicAsset = await prisma.publicAsset.upsert({
     *   create: {
     *     // ... data to create a PublicAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicAsset we want to update
     *   }
     * })
    **/
    upsert<T extends PublicAssetUpsertArgs>(
      args: SelectSubset<T, PublicAssetUpsertArgs>
    ): CheckSelect<T, Prisma__PublicAssetClient<PublicAsset>, Prisma__PublicAssetClient<PublicAssetGetPayload<T>>>

    /**
     * Count the number of PublicAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetCountArgs} args - Arguments to filter PublicAssets to count.
     * @example
     * // Count the number of PublicAssets
     * const count = await prisma.publicAsset.count({
     *   where: {
     *     // ... the filter for the PublicAssets we want to count
     *   }
     * })
    **/
    count<T extends PublicAssetCountArgs>(
      args?: Subset<T, PublicAssetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicAssetAggregateArgs>(args: Subset<T, PublicAssetAggregateArgs>): PrismaPromise<GetPublicAssetAggregateType<T>>

    /**
     * Group by PublicAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicAssetGroupByArgs['orderBy'] }
        : { orderBy?: PublicAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicAssetGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicAssetClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    baseAsset<T extends AssetArgs = {}>(args?: Subset<T, AssetArgs>): CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PublicAsset findUnique
   */
  export type PublicAssetFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * Throw an Error if a PublicAsset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PublicAsset to fetch.
     * 
    **/
    where: PublicAssetWhereUniqueInput
  }


  /**
   * PublicAsset findFirst
   */
  export type PublicAssetFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * Throw an Error if a PublicAsset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PublicAsset to fetch.
     * 
    **/
    where?: PublicAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicAssets.
     * 
    **/
    cursor?: PublicAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAssets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicAssets.
     * 
    **/
    distinct?: Enumerable<PublicAssetScalarFieldEnum>
  }


  /**
   * PublicAsset findMany
   */
  export type PublicAssetFindManyArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * Filter, which PublicAssets to fetch.
     * 
    **/
    where?: PublicAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicAssets.
     * 
    **/
    cursor?: PublicAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAssets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PublicAssetScalarFieldEnum>
  }


  /**
   * PublicAsset create
   */
  export type PublicAssetCreateArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * The data needed to create a PublicAsset.
     * 
    **/
    data: XOR<PublicAssetCreateInput, PublicAssetUncheckedCreateInput>
  }


  /**
   * PublicAsset createMany
   */
  export type PublicAssetCreateManyArgs = {
    data: Enumerable<PublicAssetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PublicAsset update
   */
  export type PublicAssetUpdateArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * The data needed to update a PublicAsset.
     * 
    **/
    data: XOR<PublicAssetUpdateInput, PublicAssetUncheckedUpdateInput>
    /**
     * Choose, which PublicAsset to update.
     * 
    **/
    where: PublicAssetWhereUniqueInput
  }


  /**
   * PublicAsset updateMany
   */
  export type PublicAssetUpdateManyArgs = {
    data: XOR<PublicAssetUpdateManyMutationInput, PublicAssetUncheckedUpdateManyInput>
    where?: PublicAssetWhereInput
  }


  /**
   * PublicAsset upsert
   */
  export type PublicAssetUpsertArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * The filter to search for the PublicAsset to update in case it exists.
     * 
    **/
    where: PublicAssetWhereUniqueInput
    /**
     * In case the PublicAsset found by the `where` argument doesn't exist, create a new PublicAsset with this data.
     * 
    **/
    create: XOR<PublicAssetCreateInput, PublicAssetUncheckedCreateInput>
    /**
     * In case the PublicAsset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PublicAssetUpdateInput, PublicAssetUncheckedUpdateInput>
  }


  /**
   * PublicAsset delete
   */
  export type PublicAssetDeleteArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
    /**
     * Filter which PublicAsset to delete.
     * 
    **/
    where: PublicAssetWhereUniqueInput
  }


  /**
   * PublicAsset deleteMany
   */
  export type PublicAssetDeleteManyArgs = {
    where?: PublicAssetWhereInput
  }


  /**
   * PublicAsset without action
   */
  export type PublicAssetArgs = {
    /**
     * Select specific fields to fetch from the PublicAsset
     * 
    **/
    select?: PublicAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicAssetInclude | null
  }



  /**
   * Model PrivateAsset
   */


  export type AggregatePrivateAsset = {
    _count: PrivateAssetCountAggregateOutputType | null
    count: PrivateAssetCountAggregateOutputType | null
    _avg: PrivateAssetAvgAggregateOutputType | null
    avg: PrivateAssetAvgAggregateOutputType | null
    _sum: PrivateAssetSumAggregateOutputType | null
    sum: PrivateAssetSumAggregateOutputType | null
    _min: PrivateAssetMinAggregateOutputType | null
    min: PrivateAssetMinAggregateOutputType | null
    _max: PrivateAssetMaxAggregateOutputType | null
    max: PrivateAssetMaxAggregateOutputType | null
  }

  export type PrivateAssetAvgAggregateOutputType = {
    id: number | null
  }

  export type PrivateAssetSumAggregateOutputType = {
    id: number | null
  }

  export type PrivateAssetMinAggregateOutputType = {
    id: number | null
  }

  export type PrivateAssetMaxAggregateOutputType = {
    id: number | null
  }

  export type PrivateAssetCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type PrivateAssetAvgAggregateInputType = {
    id?: true
  }

  export type PrivateAssetSumAggregateInputType = {
    id?: true
  }

  export type PrivateAssetMinAggregateInputType = {
    id?: true
  }

  export type PrivateAssetMaxAggregateInputType = {
    id?: true
  }

  export type PrivateAssetCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type PrivateAssetAggregateArgs = {
    /**
     * Filter which PrivateAsset to aggregate.
     * 
    **/
    where?: PrivateAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PrivateAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PrivateAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateAssets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateAssets
    **/
    _count?: true | PrivateAssetCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PrivateAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateAssetAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PrivateAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateAssetSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PrivateAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateAssetMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PrivateAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateAssetMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PrivateAssetMaxAggregateInputType
  }

  export type GetPrivateAssetAggregateType<T extends PrivateAssetAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateAsset[P]>
      : GetScalarType<T[P], AggregatePrivateAsset[P]>
  }


    
    
  export type PrivateAssetGroupByArgs = {
    where?: PrivateAssetWhereInput
    orderBy?: Enumerable<PrivateAssetOrderByInput>
    by: Array<PrivateAssetScalarFieldEnum>
    having?: PrivateAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateAssetCountAggregateInputType | true
    _avg?: PrivateAssetAvgAggregateInputType
    _sum?: PrivateAssetSumAggregateInputType
    _min?: PrivateAssetMinAggregateInputType
    _max?: PrivateAssetMaxAggregateInputType
  }


  export type PrivateAssetGroupByOutputType = {
    id: number
    _count: PrivateAssetCountAggregateOutputType | null
    _avg: PrivateAssetAvgAggregateOutputType | null
    _sum: PrivateAssetSumAggregateOutputType | null
    _min: PrivateAssetMinAggregateOutputType | null
    _max: PrivateAssetMaxAggregateOutputType | null
  }

  type GetPrivateAssetGroupByPayload<T extends PrivateAssetGroupByArgs> = Promise<
    Array<
      PickArray<PrivateAssetGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PrivateAssetGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PrivateAssetGroupByOutputType[P]> 
            : GetScalarType<T[P], PrivateAssetGroupByOutputType[P]>
        }
      > 
    >


  export type PrivateAssetSelect = {
    id?: boolean
    baseAsset?: boolean | AssetArgs
    historicalValues?: boolean | HistoricalValueFindManyArgs
  }

  export type PrivateAssetInclude = {
    baseAsset?: boolean | AssetArgs
    historicalValues?: boolean | HistoricalValueFindManyArgs
  }

  export type PrivateAssetGetPayload<
    S extends boolean | null | undefined | PrivateAssetArgs,
    U = keyof S
      > = S extends true
        ? PrivateAsset
    : S extends undefined
    ? never
    : S extends PrivateAssetArgs | PrivateAssetFindManyArgs
    ?'include' extends U
    ? PrivateAsset  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'baseAsset'
        ? AssetGetPayload<S['include'][P]> :
        P extends 'historicalValues'
        ? Array < HistoricalValueGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PrivateAsset ?PrivateAsset [P]
  : 
          P extends 'baseAsset'
        ? AssetGetPayload<S['select'][P]> :
        P extends 'historicalValues'
        ? Array < HistoricalValueGetPayload<S['select'][P]>>  : never
  } 
    : PrivateAsset
  : PrivateAsset


  type PrivateAssetCountArgs = Merge<
    Omit<PrivateAssetFindManyArgs, 'select' | 'include'> & {
      select?: PrivateAssetCountAggregateInputType | true
    }
  >

  export interface PrivateAssetDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PrivateAsset that matches the filter.
     * @param {PrivateAssetFindUniqueArgs} args - Arguments to find a PrivateAsset
     * @example
     * // Get one PrivateAsset
     * const privateAsset = await prisma.privateAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrivateAssetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrivateAssetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PrivateAsset'> extends True ? CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>> : CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset | null >, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T> | null >>

    /**
     * Find the first PrivateAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetFindFirstArgs} args - Arguments to find a PrivateAsset
     * @example
     * // Get one PrivateAsset
     * const privateAsset = await prisma.privateAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrivateAssetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrivateAssetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PrivateAsset'> extends True ? CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>> : CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset | null >, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T> | null >>

    /**
     * Find zero or more PrivateAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateAssets
     * const privateAssets = await prisma.privateAsset.findMany()
     * 
     * // Get first 10 PrivateAssets
     * const privateAssets = await prisma.privateAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateAssetWithIdOnly = await prisma.privateAsset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrivateAssetFindManyArgs>(
      args?: SelectSubset<T, PrivateAssetFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PrivateAsset>>, PrismaPromise<Array<PrivateAssetGetPayload<T>>>>

    /**
     * Create a PrivateAsset.
     * @param {PrivateAssetCreateArgs} args - Arguments to create a PrivateAsset.
     * @example
     * // Create one PrivateAsset
     * const PrivateAsset = await prisma.privateAsset.create({
     *   data: {
     *     // ... data to create a PrivateAsset
     *   }
     * })
     * 
    **/
    create<T extends PrivateAssetCreateArgs>(
      args: SelectSubset<T, PrivateAssetCreateArgs>
    ): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>>

    /**
     * Create many PrivateAssets.
     *     @param {PrivateAssetCreateManyArgs} args - Arguments to create many PrivateAssets.
     *     @example
     *     // Create many PrivateAssets
     *     const privateAsset = await prisma.privateAsset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrivateAssetCreateManyArgs>(
      args?: SelectSubset<T, PrivateAssetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PrivateAsset.
     * @param {PrivateAssetDeleteArgs} args - Arguments to delete one PrivateAsset.
     * @example
     * // Delete one PrivateAsset
     * const PrivateAsset = await prisma.privateAsset.delete({
     *   where: {
     *     // ... filter to delete one PrivateAsset
     *   }
     * })
     * 
    **/
    delete<T extends PrivateAssetDeleteArgs>(
      args: SelectSubset<T, PrivateAssetDeleteArgs>
    ): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>>

    /**
     * Update one PrivateAsset.
     * @param {PrivateAssetUpdateArgs} args - Arguments to update one PrivateAsset.
     * @example
     * // Update one PrivateAsset
     * const privateAsset = await prisma.privateAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrivateAssetUpdateArgs>(
      args: SelectSubset<T, PrivateAssetUpdateArgs>
    ): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>>

    /**
     * Delete zero or more PrivateAssets.
     * @param {PrivateAssetDeleteManyArgs} args - Arguments to filter PrivateAssets to delete.
     * @example
     * // Delete a few PrivateAssets
     * const { count } = await prisma.privateAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrivateAssetDeleteManyArgs>(
      args?: SelectSubset<T, PrivateAssetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateAssets
     * const privateAsset = await prisma.privateAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrivateAssetUpdateManyArgs>(
      args: SelectSubset<T, PrivateAssetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PrivateAsset.
     * @param {PrivateAssetUpsertArgs} args - Arguments to update or create a PrivateAsset.
     * @example
     * // Update or create a PrivateAsset
     * const privateAsset = await prisma.privateAsset.upsert({
     *   create: {
     *     // ... data to create a PrivateAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateAsset we want to update
     *   }
     * })
    **/
    upsert<T extends PrivateAssetUpsertArgs>(
      args: SelectSubset<T, PrivateAssetUpsertArgs>
    ): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset>, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T>>>

    /**
     * Count the number of PrivateAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetCountArgs} args - Arguments to filter PrivateAssets to count.
     * @example
     * // Count the number of PrivateAssets
     * const count = await prisma.privateAsset.count({
     *   where: {
     *     // ... the filter for the PrivateAssets we want to count
     *   }
     * })
    **/
    count<T extends PrivateAssetCountArgs>(
      args?: Subset<T, PrivateAssetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateAssetAggregateArgs>(args: Subset<T, PrivateAssetAggregateArgs>): PrismaPromise<GetPrivateAssetAggregateType<T>>

    /**
     * Group by PrivateAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateAssetGroupByArgs['orderBy'] }
        : { orderBy?: PrivateAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateAssetGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrivateAssetClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    baseAsset<T extends AssetArgs = {}>(args?: Subset<T, AssetArgs>): CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>;

    historicalValues<T extends HistoricalValueFindManyArgs = {}>(args?: Subset<T, HistoricalValueFindManyArgs>): CheckSelect<T, PrismaPromise<Array<HistoricalValue>>, PrismaPromise<Array<HistoricalValueGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PrivateAsset findUnique
   */
  export type PrivateAssetFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * Throw an Error if a PrivateAsset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PrivateAsset to fetch.
     * 
    **/
    where: PrivateAssetWhereUniqueInput
  }


  /**
   * PrivateAsset findFirst
   */
  export type PrivateAssetFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * Throw an Error if a PrivateAsset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PrivateAsset to fetch.
     * 
    **/
    where?: PrivateAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PrivateAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateAssets.
     * 
    **/
    cursor?: PrivateAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateAssets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateAssets.
     * 
    **/
    distinct?: Enumerable<PrivateAssetScalarFieldEnum>
  }


  /**
   * PrivateAsset findMany
   */
  export type PrivateAssetFindManyArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * Filter, which PrivateAssets to fetch.
     * 
    **/
    where?: PrivateAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateAssets to fetch.
     * 
    **/
    orderBy?: Enumerable<PrivateAssetOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateAssets.
     * 
    **/
    cursor?: PrivateAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateAssets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateAssets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PrivateAssetScalarFieldEnum>
  }


  /**
   * PrivateAsset create
   */
  export type PrivateAssetCreateArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * The data needed to create a PrivateAsset.
     * 
    **/
    data: XOR<PrivateAssetCreateInput, PrivateAssetUncheckedCreateInput>
  }


  /**
   * PrivateAsset createMany
   */
  export type PrivateAssetCreateManyArgs = {
    data: Enumerable<PrivateAssetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PrivateAsset update
   */
  export type PrivateAssetUpdateArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * The data needed to update a PrivateAsset.
     * 
    **/
    data: XOR<PrivateAssetUpdateInput, PrivateAssetUncheckedUpdateInput>
    /**
     * Choose, which PrivateAsset to update.
     * 
    **/
    where: PrivateAssetWhereUniqueInput
  }


  /**
   * PrivateAsset updateMany
   */
  export type PrivateAssetUpdateManyArgs = {
    data: XOR<PrivateAssetUpdateManyMutationInput, PrivateAssetUncheckedUpdateManyInput>
    where?: PrivateAssetWhereInput
  }


  /**
   * PrivateAsset upsert
   */
  export type PrivateAssetUpsertArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * The filter to search for the PrivateAsset to update in case it exists.
     * 
    **/
    where: PrivateAssetWhereUniqueInput
    /**
     * In case the PrivateAsset found by the `where` argument doesn't exist, create a new PrivateAsset with this data.
     * 
    **/
    create: XOR<PrivateAssetCreateInput, PrivateAssetUncheckedCreateInput>
    /**
     * In case the PrivateAsset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PrivateAssetUpdateInput, PrivateAssetUncheckedUpdateInput>
  }


  /**
   * PrivateAsset delete
   */
  export type PrivateAssetDeleteArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
    /**
     * Filter which PrivateAsset to delete.
     * 
    **/
    where: PrivateAssetWhereUniqueInput
  }


  /**
   * PrivateAsset deleteMany
   */
  export type PrivateAssetDeleteManyArgs = {
    where?: PrivateAssetWhereInput
  }


  /**
   * PrivateAsset without action
   */
  export type PrivateAssetArgs = {
    /**
     * Select specific fields to fetch from the PrivateAsset
     * 
    **/
    select?: PrivateAssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrivateAssetInclude | null
  }



  /**
   * Model HistoricalValue
   */


  export type AggregateHistoricalValue = {
    _count: HistoricalValueCountAggregateOutputType | null
    count: HistoricalValueCountAggregateOutputType | null
    _avg: HistoricalValueAvgAggregateOutputType | null
    avg: HistoricalValueAvgAggregateOutputType | null
    _sum: HistoricalValueSumAggregateOutputType | null
    sum: HistoricalValueSumAggregateOutputType | null
    _min: HistoricalValueMinAggregateOutputType | null
    min: HistoricalValueMinAggregateOutputType | null
    _max: HistoricalValueMaxAggregateOutputType | null
    max: HistoricalValueMaxAggregateOutputType | null
  }

  export type HistoricalValueAvgAggregateOutputType = {
    id: number | null
    unitPrice: number | null
    assetId: number | null
  }

  export type HistoricalValueSumAggregateOutputType = {
    id: number | null
    unitPrice: number | null
    assetId: number | null
  }

  export type HistoricalValueMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    date: Date | null
    unitPrice: number | null
    currency: string | null
    description: string | null
    assetId: number | null
  }

  export type HistoricalValueMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    date: Date | null
    unitPrice: number | null
    currency: string | null
    description: string | null
    assetId: number | null
  }

  export type HistoricalValueCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    date: number
    unitPrice: number
    currency: number
    description: number
    assetId: number
    _all: number
  }


  export type HistoricalValueAvgAggregateInputType = {
    id?: true
    unitPrice?: true
    assetId?: true
  }

  export type HistoricalValueSumAggregateInputType = {
    id?: true
    unitPrice?: true
    assetId?: true
  }

  export type HistoricalValueMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    unitPrice?: true
    currency?: true
    description?: true
    assetId?: true
  }

  export type HistoricalValueMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    unitPrice?: true
    currency?: true
    description?: true
    assetId?: true
  }

  export type HistoricalValueCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    unitPrice?: true
    currency?: true
    description?: true
    assetId?: true
    _all?: true
  }

  export type HistoricalValueAggregateArgs = {
    /**
     * Filter which HistoricalValue to aggregate.
     * 
    **/
    where?: HistoricalValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalValues to fetch.
     * 
    **/
    orderBy?: Enumerable<HistoricalValueOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HistoricalValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalValues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricalValues
    **/
    _count?: true | HistoricalValueCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | HistoricalValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricalValueAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: HistoricalValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricalValueSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: HistoricalValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricalValueMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: HistoricalValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricalValueMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: HistoricalValueMaxAggregateInputType
  }

  export type GetHistoricalValueAggregateType<T extends HistoricalValueAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricalValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricalValue[P]>
      : GetScalarType<T[P], AggregateHistoricalValue[P]>
  }


    
    
  export type HistoricalValueGroupByArgs = {
    where?: HistoricalValueWhereInput
    orderBy?: Enumerable<HistoricalValueOrderByInput>
    by: Array<HistoricalValueScalarFieldEnum>
    having?: HistoricalValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricalValueCountAggregateInputType | true
    _avg?: HistoricalValueAvgAggregateInputType
    _sum?: HistoricalValueSumAggregateInputType
    _min?: HistoricalValueMinAggregateInputType
    _max?: HistoricalValueMaxAggregateInputType
  }


  export type HistoricalValueGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    date: Date
    unitPrice: number
    currency: string
    description: string | null
    assetId: number
    _count: HistoricalValueCountAggregateOutputType | null
    _avg: HistoricalValueAvgAggregateOutputType | null
    _sum: HistoricalValueSumAggregateOutputType | null
    _min: HistoricalValueMinAggregateOutputType | null
    _max: HistoricalValueMaxAggregateOutputType | null
  }

  type GetHistoricalValueGroupByPayload<T extends HistoricalValueGroupByArgs> = Promise<
    Array<
      PickArray<HistoricalValueGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof HistoricalValueGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], HistoricalValueGroupByOutputType[P]> 
            : GetScalarType<T[P], HistoricalValueGroupByOutputType[P]>
        }
      > 
    >


  export type HistoricalValueSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    date?: boolean
    unitPrice?: boolean
    currency?: boolean
    description?: boolean
    asset?: boolean | PrivateAssetArgs
    assetId?: boolean
  }

  export type HistoricalValueInclude = {
    asset?: boolean | PrivateAssetArgs
  }

  export type HistoricalValueGetPayload<
    S extends boolean | null | undefined | HistoricalValueArgs,
    U = keyof S
      > = S extends true
        ? HistoricalValue
    : S extends undefined
    ? never
    : S extends HistoricalValueArgs | HistoricalValueFindManyArgs
    ?'include' extends U
    ? HistoricalValue  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'asset'
        ? PrivateAssetGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof HistoricalValue ?HistoricalValue [P]
  : 
          P extends 'asset'
        ? PrivateAssetGetPayload<S['select'][P]> : never
  } 
    : HistoricalValue
  : HistoricalValue


  type HistoricalValueCountArgs = Merge<
    Omit<HistoricalValueFindManyArgs, 'select' | 'include'> & {
      select?: HistoricalValueCountAggregateInputType | true
    }
  >

  export interface HistoricalValueDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one HistoricalValue that matches the filter.
     * @param {HistoricalValueFindUniqueArgs} args - Arguments to find a HistoricalValue
     * @example
     * // Get one HistoricalValue
     * const historicalValue = await prisma.historicalValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HistoricalValueFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HistoricalValueFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HistoricalValue'> extends True ? CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>> : CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue | null >, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T> | null >>

    /**
     * Find the first HistoricalValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueFindFirstArgs} args - Arguments to find a HistoricalValue
     * @example
     * // Get one HistoricalValue
     * const historicalValue = await prisma.historicalValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HistoricalValueFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HistoricalValueFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HistoricalValue'> extends True ? CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>> : CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue | null >, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T> | null >>

    /**
     * Find zero or more HistoricalValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricalValues
     * const historicalValues = await prisma.historicalValue.findMany()
     * 
     * // Get first 10 HistoricalValues
     * const historicalValues = await prisma.historicalValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicalValueWithIdOnly = await prisma.historicalValue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HistoricalValueFindManyArgs>(
      args?: SelectSubset<T, HistoricalValueFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<HistoricalValue>>, PrismaPromise<Array<HistoricalValueGetPayload<T>>>>

    /**
     * Create a HistoricalValue.
     * @param {HistoricalValueCreateArgs} args - Arguments to create a HistoricalValue.
     * @example
     * // Create one HistoricalValue
     * const HistoricalValue = await prisma.historicalValue.create({
     *   data: {
     *     // ... data to create a HistoricalValue
     *   }
     * })
     * 
    **/
    create<T extends HistoricalValueCreateArgs>(
      args: SelectSubset<T, HistoricalValueCreateArgs>
    ): CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>>

    /**
     * Create many HistoricalValues.
     *     @param {HistoricalValueCreateManyArgs} args - Arguments to create many HistoricalValues.
     *     @example
     *     // Create many HistoricalValues
     *     const historicalValue = await prisma.historicalValue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HistoricalValueCreateManyArgs>(
      args?: SelectSubset<T, HistoricalValueCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a HistoricalValue.
     * @param {HistoricalValueDeleteArgs} args - Arguments to delete one HistoricalValue.
     * @example
     * // Delete one HistoricalValue
     * const HistoricalValue = await prisma.historicalValue.delete({
     *   where: {
     *     // ... filter to delete one HistoricalValue
     *   }
     * })
     * 
    **/
    delete<T extends HistoricalValueDeleteArgs>(
      args: SelectSubset<T, HistoricalValueDeleteArgs>
    ): CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>>

    /**
     * Update one HistoricalValue.
     * @param {HistoricalValueUpdateArgs} args - Arguments to update one HistoricalValue.
     * @example
     * // Update one HistoricalValue
     * const historicalValue = await prisma.historicalValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HistoricalValueUpdateArgs>(
      args: SelectSubset<T, HistoricalValueUpdateArgs>
    ): CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>>

    /**
     * Delete zero or more HistoricalValues.
     * @param {HistoricalValueDeleteManyArgs} args - Arguments to filter HistoricalValues to delete.
     * @example
     * // Delete a few HistoricalValues
     * const { count } = await prisma.historicalValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HistoricalValueDeleteManyArgs>(
      args?: SelectSubset<T, HistoricalValueDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricalValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricalValues
     * const historicalValue = await prisma.historicalValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HistoricalValueUpdateManyArgs>(
      args: SelectSubset<T, HistoricalValueUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoricalValue.
     * @param {HistoricalValueUpsertArgs} args - Arguments to update or create a HistoricalValue.
     * @example
     * // Update or create a HistoricalValue
     * const historicalValue = await prisma.historicalValue.upsert({
     *   create: {
     *     // ... data to create a HistoricalValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricalValue we want to update
     *   }
     * })
    **/
    upsert<T extends HistoricalValueUpsertArgs>(
      args: SelectSubset<T, HistoricalValueUpsertArgs>
    ): CheckSelect<T, Prisma__HistoricalValueClient<HistoricalValue>, Prisma__HistoricalValueClient<HistoricalValueGetPayload<T>>>

    /**
     * Count the number of HistoricalValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueCountArgs} args - Arguments to filter HistoricalValues to count.
     * @example
     * // Count the number of HistoricalValues
     * const count = await prisma.historicalValue.count({
     *   where: {
     *     // ... the filter for the HistoricalValues we want to count
     *   }
     * })
    **/
    count<T extends HistoricalValueCountArgs>(
      args?: Subset<T, HistoricalValueCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricalValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricalValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricalValueAggregateArgs>(args: Subset<T, HistoricalValueAggregateArgs>): PrismaPromise<GetHistoricalValueAggregateType<T>>

    /**
     * Group by HistoricalValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricalValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricalValueGroupByArgs['orderBy'] }
        : { orderBy?: HistoricalValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricalValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricalValueGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricalValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HistoricalValueClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    asset<T extends PrivateAssetArgs = {}>(args?: Subset<T, PrivateAssetArgs>): CheckSelect<T, Prisma__PrivateAssetClient<PrivateAsset | null >, Prisma__PrivateAssetClient<PrivateAssetGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * HistoricalValue findUnique
   */
  export type HistoricalValueFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * Throw an Error if a HistoricalValue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which HistoricalValue to fetch.
     * 
    **/
    where: HistoricalValueWhereUniqueInput
  }


  /**
   * HistoricalValue findFirst
   */
  export type HistoricalValueFindFirstArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * Throw an Error if a HistoricalValue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which HistoricalValue to fetch.
     * 
    **/
    where?: HistoricalValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalValues to fetch.
     * 
    **/
    orderBy?: Enumerable<HistoricalValueOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricalValues.
     * 
    **/
    cursor?: HistoricalValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalValues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricalValues.
     * 
    **/
    distinct?: Enumerable<HistoricalValueScalarFieldEnum>
  }


  /**
   * HistoricalValue findMany
   */
  export type HistoricalValueFindManyArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * Filter, which HistoricalValues to fetch.
     * 
    **/
    where?: HistoricalValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalValues to fetch.
     * 
    **/
    orderBy?: Enumerable<HistoricalValueOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricalValues.
     * 
    **/
    cursor?: HistoricalValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalValues.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HistoricalValueScalarFieldEnum>
  }


  /**
   * HistoricalValue create
   */
  export type HistoricalValueCreateArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * The data needed to create a HistoricalValue.
     * 
    **/
    data: XOR<HistoricalValueCreateInput, HistoricalValueUncheckedCreateInput>
  }


  /**
   * HistoricalValue createMany
   */
  export type HistoricalValueCreateManyArgs = {
    data: Enumerable<HistoricalValueCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HistoricalValue update
   */
  export type HistoricalValueUpdateArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * The data needed to update a HistoricalValue.
     * 
    **/
    data: XOR<HistoricalValueUpdateInput, HistoricalValueUncheckedUpdateInput>
    /**
     * Choose, which HistoricalValue to update.
     * 
    **/
    where: HistoricalValueWhereUniqueInput
  }


  /**
   * HistoricalValue updateMany
   */
  export type HistoricalValueUpdateManyArgs = {
    data: XOR<HistoricalValueUpdateManyMutationInput, HistoricalValueUncheckedUpdateManyInput>
    where?: HistoricalValueWhereInput
  }


  /**
   * HistoricalValue upsert
   */
  export type HistoricalValueUpsertArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * The filter to search for the HistoricalValue to update in case it exists.
     * 
    **/
    where: HistoricalValueWhereUniqueInput
    /**
     * In case the HistoricalValue found by the `where` argument doesn't exist, create a new HistoricalValue with this data.
     * 
    **/
    create: XOR<HistoricalValueCreateInput, HistoricalValueUncheckedCreateInput>
    /**
     * In case the HistoricalValue was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HistoricalValueUpdateInput, HistoricalValueUncheckedUpdateInput>
  }


  /**
   * HistoricalValue delete
   */
  export type HistoricalValueDeleteArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
    /**
     * Filter which HistoricalValue to delete.
     * 
    **/
    where: HistoricalValueWhereUniqueInput
  }


  /**
   * HistoricalValue deleteMany
   */
  export type HistoricalValueDeleteManyArgs = {
    where?: HistoricalValueWhereInput
  }


  /**
   * HistoricalValue without action
   */
  export type HistoricalValueArgs = {
    /**
     * Select specific fields to fetch from the HistoricalValue
     * 
    **/
    select?: HistoricalValueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HistoricalValueInclude | null
  }



  /**
   * Model Portfolio
   */


  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
    max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    description: string | null
    userId: number | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    name: string | null
    description: string | null
    userId: number | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    name: number
    description: number
    userId: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    userId?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    userId?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    name?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type PortfolioAggregateArgs = {
    /**
     * Filter which Portfolio to aggregate.
     * 
    **/
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     * 
    **/
    orderBy?: Enumerable<PortfolioOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }


    
    
  export type PortfolioGroupByArgs = {
    where?: PortfolioWhereInput
    orderBy?: Enumerable<PortfolioOrderByInput>
    by: Array<PortfolioScalarFieldEnum>
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }


  export type PortfolioGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    name: string
    description: string | null
    userId: number
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Promise<
    Array<
      PickArray<PortfolioGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]> 
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      > 
    >


  export type PortfolioSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    assets?: boolean | AssetFindManyArgs
    owner?: boolean | UserArgs
    userId?: boolean
  }

  export type PortfolioInclude = {
    assets?: boolean | AssetFindManyArgs
    owner?: boolean | UserArgs
  }

  export type PortfolioGetPayload<
    S extends boolean | null | undefined | PortfolioArgs,
    U = keyof S
      > = S extends true
        ? Portfolio
    : S extends undefined
    ? never
    : S extends PortfolioArgs | PortfolioFindManyArgs
    ?'include' extends U
    ? Portfolio  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'assets'
        ? Array < AssetGetPayload<S['include'][P]>>  :
        P extends 'owner'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Portfolio ?Portfolio [P]
  : 
          P extends 'assets'
        ? Array < AssetGetPayload<S['select'][P]>>  :
        P extends 'owner'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Portfolio
  : Portfolio


  type PortfolioCountArgs = Merge<
    Omit<PortfolioFindManyArgs, 'select' | 'include'> & {
      select?: PortfolioCountAggregateInputType | true
    }
  >

  export interface PortfolioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortfolioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PortfolioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Portfolio'> extends True ? CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>> : CheckSelect<T, Prisma__PortfolioClient<Portfolio | null >, Prisma__PortfolioClient<PortfolioGetPayload<T> | null >>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortfolioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PortfolioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Portfolio'> extends True ? CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>> : CheckSelect<T, Prisma__PortfolioClient<Portfolio | null >, Prisma__PortfolioClient<PortfolioGetPayload<T> | null >>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PortfolioFindManyArgs>(
      args?: SelectSubset<T, PortfolioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Portfolio>>, PrismaPromise<Array<PortfolioGetPayload<T>>>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
    **/
    create<T extends PortfolioCreateArgs>(
      args: SelectSubset<T, PortfolioCreateArgs>
    ): CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>>

    /**
     * Create many Portfolios.
     *     @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     *     @example
     *     // Create many Portfolios
     *     const portfolio = await prisma.portfolio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PortfolioCreateManyArgs>(
      args?: SelectSubset<T, PortfolioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
    **/
    delete<T extends PortfolioDeleteArgs>(
      args: SelectSubset<T, PortfolioDeleteArgs>
    ): CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortfolioUpdateArgs>(
      args: SelectSubset<T, PortfolioUpdateArgs>
    ): CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortfolioDeleteManyArgs>(
      args?: SelectSubset<T, PortfolioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortfolioUpdateManyArgs>(
      args: SelectSubset<T, PortfolioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
    **/
    upsert<T extends PortfolioUpsertArgs>(
      args: SelectSubset<T, PortfolioUpsertArgs>
    ): CheckSelect<T, Prisma__PortfolioClient<Portfolio>, Prisma__PortfolioClient<PortfolioGetPayload<T>>>

    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PortfolioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    assets<T extends AssetFindManyArgs = {}>(args?: Subset<T, AssetFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Asset>>, PrismaPromise<Array<AssetGetPayload<T>>>>;

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * Throw an Error if a Portfolio can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Portfolio to fetch.
     * 
    **/
    where: PortfolioWhereUniqueInput
  }


  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * Throw an Error if a Portfolio can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Portfolio to fetch.
     * 
    **/
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     * 
    **/
    orderBy?: Enumerable<PortfolioOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     * 
    **/
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     * 
    **/
    distinct?: Enumerable<PortfolioScalarFieldEnum>
  }


  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * Filter, which Portfolios to fetch.
     * 
    **/
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     * 
    **/
    orderBy?: Enumerable<PortfolioOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     * 
    **/
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PortfolioScalarFieldEnum>
  }


  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * The data needed to create a Portfolio.
     * 
    **/
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }


  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs = {
    data: Enumerable<PortfolioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * The data needed to update a Portfolio.
     * 
    **/
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     * 
    **/
    where: PortfolioWhereUniqueInput
  }


  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs = {
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    where?: PortfolioWhereInput
  }


  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     * 
    **/
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     * 
    **/
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }


  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
    /**
     * Filter which Portfolio to delete.
     * 
    **/
    where: PortfolioWhereUniqueInput
  }


  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs = {
    where?: PortfolioWhereInput
  }


  /**
   * Portfolio without action
   */
  export type PortfolioArgs = {
    /**
     * Select specific fields to fetch from the Portfolio
     * 
    **/
    select?: PortfolioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortfolioInclude | null
  }



  /**
   * Model TransactionRecord
   */


  export type AggregateTransactionRecord = {
    _count: TransactionRecordCountAggregateOutputType | null
    count: TransactionRecordCountAggregateOutputType | null
    _avg: TransactionRecordAvgAggregateOutputType | null
    avg: TransactionRecordAvgAggregateOutputType | null
    _sum: TransactionRecordSumAggregateOutputType | null
    sum: TransactionRecordSumAggregateOutputType | null
    _min: TransactionRecordMinAggregateOutputType | null
    min: TransactionRecordMinAggregateOutputType | null
    _max: TransactionRecordMaxAggregateOutputType | null
    max: TransactionRecordMaxAggregateOutputType | null
  }

  export type TransactionRecordAvgAggregateOutputType = {
    id: number | null
    unitPrice: number | null
    assetQuantity: number | null
    assetId: number | null
  }

  export type TransactionRecordSumAggregateOutputType = {
    id: number | null
    unitPrice: number | null
    assetQuantity: number | null
    assetId: number | null
  }

  export type TransactionRecordMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    date: Date | null
    note: string | null
    currency: string | null
    unitPrice: number | null
    assetQuantity: number | null
    assetId: number | null
    transactionType: TransactionType | null
  }

  export type TransactionRecordMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    createdAt: Date | null
    date: Date | null
    note: string | null
    currency: string | null
    unitPrice: number | null
    assetQuantity: number | null
    assetId: number | null
    transactionType: TransactionType | null
  }

  export type TransactionRecordCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    date: number
    note: number
    currency: number
    unitPrice: number
    assetQuantity: number
    assetId: number
    transactionType: number
    _all: number
  }


  export type TransactionRecordAvgAggregateInputType = {
    id?: true
    unitPrice?: true
    assetQuantity?: true
    assetId?: true
  }

  export type TransactionRecordSumAggregateInputType = {
    id?: true
    unitPrice?: true
    assetQuantity?: true
    assetId?: true
  }

  export type TransactionRecordMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    note?: true
    currency?: true
    unitPrice?: true
    assetQuantity?: true
    assetId?: true
    transactionType?: true
  }

  export type TransactionRecordMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    note?: true
    currency?: true
    unitPrice?: true
    assetQuantity?: true
    assetId?: true
    transactionType?: true
  }

  export type TransactionRecordCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    date?: true
    note?: true
    currency?: true
    unitPrice?: true
    assetQuantity?: true
    assetId?: true
    transactionType?: true
    _all?: true
  }

  export type TransactionRecordAggregateArgs = {
    /**
     * Filter which TransactionRecord to aggregate.
     * 
    **/
    where?: TransactionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionRecordOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TransactionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionRecords
    **/
    _count?: true | TransactionRecordCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TransactionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionRecordAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TransactionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionRecordSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TransactionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionRecordMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TransactionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionRecordMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TransactionRecordMaxAggregateInputType
  }

  export type GetTransactionRecordAggregateType<T extends TransactionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionRecord[P]>
      : GetScalarType<T[P], AggregateTransactionRecord[P]>
  }


    
    
  export type TransactionRecordGroupByArgs = {
    where?: TransactionRecordWhereInput
    orderBy?: Enumerable<TransactionRecordOrderByInput>
    by: Array<TransactionRecordScalarFieldEnum>
    having?: TransactionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionRecordCountAggregateInputType | true
    _avg?: TransactionRecordAvgAggregateInputType
    _sum?: TransactionRecordSumAggregateInputType
    _min?: TransactionRecordMinAggregateInputType
    _max?: TransactionRecordMaxAggregateInputType
  }


  export type TransactionRecordGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    date: Date
    note: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    assetId: number
    transactionType: TransactionType
    _count: TransactionRecordCountAggregateOutputType | null
    _avg: TransactionRecordAvgAggregateOutputType | null
    _sum: TransactionRecordSumAggregateOutputType | null
    _min: TransactionRecordMinAggregateOutputType | null
    _max: TransactionRecordMaxAggregateOutputType | null
  }

  type GetTransactionRecordGroupByPayload<T extends TransactionRecordGroupByArgs> = Promise<
    Array<
      PickArray<TransactionRecordGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TransactionRecordGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TransactionRecordGroupByOutputType[P]> 
            : GetScalarType<T[P], TransactionRecordGroupByOutputType[P]>
        }
      > 
    >


  export type TransactionRecordSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    date?: boolean
    note?: boolean
    currency?: boolean
    unitPrice?: boolean
    assetQuantity?: boolean
    asset?: boolean | AssetArgs
    assetId?: boolean
    transactionType?: boolean
  }

  export type TransactionRecordInclude = {
    asset?: boolean | AssetArgs
  }

  export type TransactionRecordGetPayload<
    S extends boolean | null | undefined | TransactionRecordArgs,
    U = keyof S
      > = S extends true
        ? TransactionRecord
    : S extends undefined
    ? never
    : S extends TransactionRecordArgs | TransactionRecordFindManyArgs
    ?'include' extends U
    ? TransactionRecord  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'asset'
        ? AssetGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TransactionRecord ?TransactionRecord [P]
  : 
          P extends 'asset'
        ? AssetGetPayload<S['select'][P]> : never
  } 
    : TransactionRecord
  : TransactionRecord


  type TransactionRecordCountArgs = Merge<
    Omit<TransactionRecordFindManyArgs, 'select' | 'include'> & {
      select?: TransactionRecordCountAggregateInputType | true
    }
  >

  export interface TransactionRecordDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TransactionRecord that matches the filter.
     * @param {TransactionRecordFindUniqueArgs} args - Arguments to find a TransactionRecord
     * @example
     * // Get one TransactionRecord
     * const transactionRecord = await prisma.transactionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransactionRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TransactionRecord'> extends True ? CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>> : CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord | null >, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T> | null >>

    /**
     * Find the first TransactionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordFindFirstArgs} args - Arguments to find a TransactionRecord
     * @example
     * // Get one TransactionRecord
     * const transactionRecord = await prisma.transactionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransactionRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TransactionRecord'> extends True ? CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>> : CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord | null >, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T> | null >>

    /**
     * Find zero or more TransactionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionRecords
     * const transactionRecords = await prisma.transactionRecord.findMany()
     * 
     * // Get first 10 TransactionRecords
     * const transactionRecords = await prisma.transactionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionRecordWithIdOnly = await prisma.transactionRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionRecordFindManyArgs>(
      args?: SelectSubset<T, TransactionRecordFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TransactionRecord>>, PrismaPromise<Array<TransactionRecordGetPayload<T>>>>

    /**
     * Create a TransactionRecord.
     * @param {TransactionRecordCreateArgs} args - Arguments to create a TransactionRecord.
     * @example
     * // Create one TransactionRecord
     * const TransactionRecord = await prisma.transactionRecord.create({
     *   data: {
     *     // ... data to create a TransactionRecord
     *   }
     * })
     * 
    **/
    create<T extends TransactionRecordCreateArgs>(
      args: SelectSubset<T, TransactionRecordCreateArgs>
    ): CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>>

    /**
     * Create many TransactionRecords.
     *     @param {TransactionRecordCreateManyArgs} args - Arguments to create many TransactionRecords.
     *     @example
     *     // Create many TransactionRecords
     *     const transactionRecord = await prisma.transactionRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionRecordCreateManyArgs>(
      args?: SelectSubset<T, TransactionRecordCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionRecord.
     * @param {TransactionRecordDeleteArgs} args - Arguments to delete one TransactionRecord.
     * @example
     * // Delete one TransactionRecord
     * const TransactionRecord = await prisma.transactionRecord.delete({
     *   where: {
     *     // ... filter to delete one TransactionRecord
     *   }
     * })
     * 
    **/
    delete<T extends TransactionRecordDeleteArgs>(
      args: SelectSubset<T, TransactionRecordDeleteArgs>
    ): CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>>

    /**
     * Update one TransactionRecord.
     * @param {TransactionRecordUpdateArgs} args - Arguments to update one TransactionRecord.
     * @example
     * // Update one TransactionRecord
     * const transactionRecord = await prisma.transactionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionRecordUpdateArgs>(
      args: SelectSubset<T, TransactionRecordUpdateArgs>
    ): CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>>

    /**
     * Delete zero or more TransactionRecords.
     * @param {TransactionRecordDeleteManyArgs} args - Arguments to filter TransactionRecords to delete.
     * @example
     * // Delete a few TransactionRecords
     * const { count } = await prisma.transactionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionRecordDeleteManyArgs>(
      args?: SelectSubset<T, TransactionRecordDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionRecords
     * const transactionRecord = await prisma.transactionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionRecordUpdateManyArgs>(
      args: SelectSubset<T, TransactionRecordUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionRecord.
     * @param {TransactionRecordUpsertArgs} args - Arguments to update or create a TransactionRecord.
     * @example
     * // Update or create a TransactionRecord
     * const transactionRecord = await prisma.transactionRecord.upsert({
     *   create: {
     *     // ... data to create a TransactionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionRecord we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionRecordUpsertArgs>(
      args: SelectSubset<T, TransactionRecordUpsertArgs>
    ): CheckSelect<T, Prisma__TransactionRecordClient<TransactionRecord>, Prisma__TransactionRecordClient<TransactionRecordGetPayload<T>>>

    /**
     * Count the number of TransactionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordCountArgs} args - Arguments to filter TransactionRecords to count.
     * @example
     * // Count the number of TransactionRecords
     * const count = await prisma.transactionRecord.count({
     *   where: {
     *     // ... the filter for the TransactionRecords we want to count
     *   }
     * })
    **/
    count<T extends TransactionRecordCountArgs>(
      args?: Subset<T, TransactionRecordCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionRecordAggregateArgs>(args: Subset<T, TransactionRecordAggregateArgs>): PrismaPromise<GetTransactionRecordAggregateType<T>>

    /**
     * Group by TransactionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionRecordGroupByArgs['orderBy'] }
        : { orderBy?: TransactionRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionRecordGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransactionRecordClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    asset<T extends AssetArgs = {}>(args?: Subset<T, AssetArgs>): CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TransactionRecord findUnique
   */
  export type TransactionRecordFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * Throw an Error if a TransactionRecord can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransactionRecord to fetch.
     * 
    **/
    where: TransactionRecordWhereUniqueInput
  }


  /**
   * TransactionRecord findFirst
   */
  export type TransactionRecordFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * Throw an Error if a TransactionRecord can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransactionRecord to fetch.
     * 
    **/
    where?: TransactionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionRecordOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionRecords.
     * 
    **/
    cursor?: TransactionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionRecords.
     * 
    **/
    distinct?: Enumerable<TransactionRecordScalarFieldEnum>
  }


  /**
   * TransactionRecord findMany
   */
  export type TransactionRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * Filter, which TransactionRecords to fetch.
     * 
    **/
    where?: TransactionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionRecordOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionRecords.
     * 
    **/
    cursor?: TransactionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRecords.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransactionRecordScalarFieldEnum>
  }


  /**
   * TransactionRecord create
   */
  export type TransactionRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * The data needed to create a TransactionRecord.
     * 
    **/
    data: XOR<TransactionRecordCreateInput, TransactionRecordUncheckedCreateInput>
  }


  /**
   * TransactionRecord createMany
   */
  export type TransactionRecordCreateManyArgs = {
    data: Enumerable<TransactionRecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TransactionRecord update
   */
  export type TransactionRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * The data needed to update a TransactionRecord.
     * 
    **/
    data: XOR<TransactionRecordUpdateInput, TransactionRecordUncheckedUpdateInput>
    /**
     * Choose, which TransactionRecord to update.
     * 
    **/
    where: TransactionRecordWhereUniqueInput
  }


  /**
   * TransactionRecord updateMany
   */
  export type TransactionRecordUpdateManyArgs = {
    data: XOR<TransactionRecordUpdateManyMutationInput, TransactionRecordUncheckedUpdateManyInput>
    where?: TransactionRecordWhereInput
  }


  /**
   * TransactionRecord upsert
   */
  export type TransactionRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * The filter to search for the TransactionRecord to update in case it exists.
     * 
    **/
    where: TransactionRecordWhereUniqueInput
    /**
     * In case the TransactionRecord found by the `where` argument doesn't exist, create a new TransactionRecord with this data.
     * 
    **/
    create: XOR<TransactionRecordCreateInput, TransactionRecordUncheckedCreateInput>
    /**
     * In case the TransactionRecord was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TransactionRecordUpdateInput, TransactionRecordUncheckedUpdateInput>
  }


  /**
   * TransactionRecord delete
   */
  export type TransactionRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
    /**
     * Filter which TransactionRecord to delete.
     * 
    **/
    where: TransactionRecordWhereUniqueInput
  }


  /**
   * TransactionRecord deleteMany
   */
  export type TransactionRecordDeleteManyArgs = {
    where?: TransactionRecordWhereInput
  }


  /**
   * TransactionRecord without action
   */
  export type TransactionRecordArgs = {
    /**
     * Select specific fields to fetch from the TransactionRecord
     * 
    **/
    select?: TransactionRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionRecordInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    portfolioId: 'portfolioId'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const PublicAssetScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    market: 'market'
  };

  export type PublicAssetScalarFieldEnum = (typeof PublicAssetScalarFieldEnum)[keyof typeof PublicAssetScalarFieldEnum]


  export const PrivateAssetScalarFieldEnum: {
    id: 'id'
  };

  export type PrivateAssetScalarFieldEnum = (typeof PrivateAssetScalarFieldEnum)[keyof typeof PrivateAssetScalarFieldEnum]


  export const HistoricalValueScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    date: 'date',
    unitPrice: 'unitPrice',
    currency: 'currency',
    description: 'description',
    assetId: 'assetId'
  };

  export type HistoricalValueScalarFieldEnum = (typeof HistoricalValueScalarFieldEnum)[keyof typeof HistoricalValueScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    userId: 'userId'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const TransactionRecordScalarFieldEnum: {
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
  };

  export type TransactionRecordScalarFieldEnum = (typeof TransactionRecordScalarFieldEnum)[keyof typeof TransactionRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    portfolios?: PortfolioListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type AssetWhereInput = {
    AND?: Enumerable<AssetWhereInput>
    OR?: Enumerable<AssetWhereInput>
    NOT?: Enumerable<AssetWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    quantity?: IntFilter | number
    portfolio?: XOR<PortfolioRelationFilter, PortfolioWhereInput>
    portfolioId?: IntFilter | number
    transactions?: TransactionRecordListRelationFilter
    privateAsset?: XOR<PrivateAssetRelationFilter, PrivateAssetWhereInput> | null
    publicAsset?: XOR<PublicAssetRelationFilter, PublicAssetWhereInput> | null
  }

  export type AssetOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
  }

  export type AssetWhereUniqueInput = {
    id?: number
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AssetScalarWhereWithAggregatesInput>
    OR?: Enumerable<AssetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AssetScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    quantity?: IntWithAggregatesFilter | number
    portfolioId?: IntWithAggregatesFilter | number
  }

  export type PublicAssetWhereInput = {
    AND?: Enumerable<PublicAssetWhereInput>
    OR?: Enumerable<PublicAssetWhereInput>
    NOT?: Enumerable<PublicAssetWhereInput>
    id?: IntFilter | number
    baseAsset?: XOR<AssetRelationFilter, AssetWhereInput>
    symbol?: StringNullableFilter | string | null
    market?: StringNullableFilter | string | null
  }

  export type PublicAssetOrderByInput = {
    id?: SortOrder
    symbol?: SortOrder
    market?: SortOrder
  }

  export type PublicAssetWhereUniqueInput = {
    id?: number
  }

  export type PublicAssetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicAssetScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicAssetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicAssetScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    symbol?: StringNullableWithAggregatesFilter | string | null
    market?: StringNullableWithAggregatesFilter | string | null
  }

  export type PrivateAssetWhereInput = {
    AND?: Enumerable<PrivateAssetWhereInput>
    OR?: Enumerable<PrivateAssetWhereInput>
    NOT?: Enumerable<PrivateAssetWhereInput>
    id?: IntFilter | number
    baseAsset?: XOR<AssetRelationFilter, AssetWhereInput>
    historicalValues?: HistoricalValueListRelationFilter
  }

  export type PrivateAssetOrderByInput = {
    id?: SortOrder
  }

  export type PrivateAssetWhereUniqueInput = {
    id?: number
  }

  export type PrivateAssetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrivateAssetScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrivateAssetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrivateAssetScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type HistoricalValueWhereInput = {
    AND?: Enumerable<HistoricalValueWhereInput>
    OR?: Enumerable<HistoricalValueWhereInput>
    NOT?: Enumerable<HistoricalValueWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    unitPrice?: IntFilter | number
    currency?: StringFilter | string
    description?: StringNullableFilter | string | null
    asset?: XOR<PrivateAssetRelationFilter, PrivateAssetWhereInput>
    assetId?: IntFilter | number
  }

  export type HistoricalValueOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    assetId?: SortOrder
  }

  export type HistoricalValueWhereUniqueInput = {
    id?: number
  }

  export type HistoricalValueScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HistoricalValueScalarWhereWithAggregatesInput>
    OR?: Enumerable<HistoricalValueScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HistoricalValueScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    date?: DateTimeWithAggregatesFilter | Date | string
    unitPrice?: IntWithAggregatesFilter | number
    currency?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    assetId?: IntWithAggregatesFilter | number
  }

  export type PortfolioWhereInput = {
    AND?: Enumerable<PortfolioWhereInput>
    OR?: Enumerable<PortfolioWhereInput>
    NOT?: Enumerable<PortfolioWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    assets?: AssetListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
  }

  export type PortfolioOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PortfolioWhereUniqueInput = {
    id?: number
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PortfolioScalarWhereWithAggregatesInput>
    OR?: Enumerable<PortfolioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PortfolioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type TransactionRecordWhereInput = {
    AND?: Enumerable<TransactionRecordWhereInput>
    OR?: Enumerable<TransactionRecordWhereInput>
    NOT?: Enumerable<TransactionRecordWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    note?: StringNullableFilter | string | null
    currency?: StringFilter | string
    unitPrice?: IntFilter | number
    assetQuantity?: IntFilter | number
    asset?: XOR<AssetRelationFilter, AssetWhereInput>
    assetId?: IntFilter | number
    transactionType?: EnumTransactionTypeFilter | TransactionType
  }

  export type TransactionRecordOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    note?: SortOrder
    currency?: SortOrder
    unitPrice?: SortOrder
    assetQuantity?: SortOrder
    assetId?: SortOrder
    transactionType?: SortOrder
  }

  export type TransactionRecordWhereUniqueInput = {
    id?: number
  }

  export type TransactionRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransactionRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransactionRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransactionRecordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    date?: DateTimeWithAggregatesFilter | Date | string
    note?: StringNullableWithAggregatesFilter | string | null
    currency?: StringWithAggregatesFilter | string
    unitPrice?: IntWithAggregatesFilter | number
    assetQuantity?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    transactionType?: EnumTransactionTypeWithAggregatesFilter | TransactionType
  }

  export type UserCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    email: string
    password: string
    portfolios?: PortfolioCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    email: string
    password: string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    portfolios?: PortfolioUpdateManyWithoutOwnerInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutOwnerInput
  }

  export type UserCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolio: PortfolioCreateNestedOneWithoutAssetsInput
    transactions?: TransactionRecordCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolioId: number
    transactions?: TransactionRecordUncheckedCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolio?: PortfolioUpdateOneRequiredWithoutAssetsInput
    transactions?: TransactionRecordUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionRecordUncheckedUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedUpdateOneWithoutBaseAssetInput
  }

  export type AssetCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolioId: number
  }

  export type AssetUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicAssetCreateInput = {
    symbol?: string | null
    market?: string | null
    baseAsset: AssetCreateNestedOneWithoutPublicAssetInput
  }

  export type PublicAssetUncheckedCreateInput = {
    id: number
    symbol?: string | null
    market?: string | null
  }

  export type PublicAssetUpdateInput = {
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    baseAsset?: AssetUpdateOneRequiredWithoutPublicAssetInput
  }

  export type PublicAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicAssetCreateManyInput = {
    id: number
    symbol?: string | null
    market?: string | null
  }

  export type PublicAssetUpdateManyMutationInput = {
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrivateAssetCreateInput = {
    baseAsset: AssetCreateNestedOneWithoutPrivateAssetInput
    historicalValues?: HistoricalValueCreateNestedManyWithoutAssetInput
  }

  export type PrivateAssetUncheckedCreateInput = {
    id: number
    historicalValues?: HistoricalValueUncheckedCreateNestedManyWithoutAssetInput
  }

  export type PrivateAssetUpdateInput = {
    baseAsset?: AssetUpdateOneRequiredWithoutPrivateAssetInput
    historicalValues?: HistoricalValueUpdateManyWithoutAssetInput
  }

  export type PrivateAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    historicalValues?: HistoricalValueUncheckedUpdateManyWithoutAssetInput
  }

  export type PrivateAssetCreateManyInput = {
    id: number
  }

  export type PrivateAssetUpdateManyMutationInput = {

  }

  export type PrivateAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricalValueCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
    asset: PrivateAssetCreateNestedOneWithoutHistoricalValuesInput
  }

  export type HistoricalValueUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
    assetId: number
  }

  export type HistoricalValueUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: PrivateAssetUpdateOneRequiredWithoutHistoricalValuesInput
  }

  export type HistoricalValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricalValueCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
    assetId: number
  }

  export type HistoricalValueUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricalValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    assets?: AssetCreateNestedManyWithoutPortfolioInput
    owner: UserCreateNestedOneWithoutPortfoliosInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    userId: number
    assets?: AssetUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUpdateManyWithoutPortfolioInput
    owner?: UserUpdateOneRequiredWithoutPortfoliosInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    assets?: AssetUncheckedUpdateManyWithoutPortfolioInput
  }

  export type PortfolioCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    userId: number
  }

  export type PortfolioUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionRecordCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    transactionType: TransactionType
    asset: AssetCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionRecordUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    assetId: number
    transactionType: TransactionType
  }

  export type TransactionRecordUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    asset?: AssetUpdateOneRequiredWithoutTransactionsInput
  }

  export type TransactionRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type TransactionRecordCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    assetId: number
    transactionType: TransactionType
  }

  export type TransactionRecordUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type TransactionRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PortfolioRelationFilter = {
    is?: PortfolioWhereInput
    isNot?: PortfolioWhereInput
  }

  export type TransactionRecordListRelationFilter = {
    every?: TransactionRecordWhereInput
    some?: TransactionRecordWhereInput
    none?: TransactionRecordWhereInput
  }

  export type PrivateAssetRelationFilter = {
    is?: PrivateAssetWhereInput
    isNot?: PrivateAssetWhereInput
  }

  export type PublicAssetRelationFilter = {
    is?: PublicAssetWhereInput | null
    isNot?: PublicAssetWhereInput | null
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type AssetRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type HistoricalValueListRelationFilter = {
    every?: HistoricalValueWhereInput
    some?: HistoricalValueWhereInput
    none?: HistoricalValueWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnumTransactionTypeFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeFilter | TransactionType
  }

  export type EnumTransactionTypeWithAggregatesFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeWithAggregatesFilter | TransactionType
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumTransactionTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumTransactionTypeFilter
    _max?: NestedEnumTransactionTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumTransactionTypeFilter
  }

  export type PortfolioCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PortfolioCreateWithoutOwnerInput>, Enumerable<PortfolioUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PortfolioCreateOrConnectWithoutOwnerInput>
    createMany?: PortfolioCreateManyOwnerInputEnvelope
    connect?: Enumerable<PortfolioWhereUniqueInput>
  }

  export type PortfolioUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PortfolioCreateWithoutOwnerInput>, Enumerable<PortfolioUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PortfolioCreateOrConnectWithoutOwnerInput>
    createMany?: PortfolioCreateManyOwnerInputEnvelope
    connect?: Enumerable<PortfolioWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PortfolioUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PortfolioCreateWithoutOwnerInput>, Enumerable<PortfolioUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PortfolioCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PortfolioUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PortfolioCreateManyOwnerInputEnvelope
    connect?: Enumerable<PortfolioWhereUniqueInput>
    set?: Enumerable<PortfolioWhereUniqueInput>
    disconnect?: Enumerable<PortfolioWhereUniqueInput>
    delete?: Enumerable<PortfolioWhereUniqueInput>
    update?: Enumerable<PortfolioUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PortfolioUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PortfolioScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioUncheckedUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PortfolioCreateWithoutOwnerInput>, Enumerable<PortfolioUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PortfolioCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PortfolioUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PortfolioCreateManyOwnerInputEnvelope
    connect?: Enumerable<PortfolioWhereUniqueInput>
    set?: Enumerable<PortfolioWhereUniqueInput>
    disconnect?: Enumerable<PortfolioWhereUniqueInput>
    delete?: Enumerable<PortfolioWhereUniqueInput>
    update?: Enumerable<PortfolioUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PortfolioUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PortfolioScalarWhereInput>
  }

  export type PortfolioCreateNestedOneWithoutAssetsInput = {
    create?: XOR<PortfolioCreateWithoutAssetsInput, PortfolioUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAssetsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type TransactionRecordCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<TransactionRecordCreateWithoutAssetInput>, Enumerable<TransactionRecordUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<TransactionRecordCreateOrConnectWithoutAssetInput>
    createMany?: TransactionRecordCreateManyAssetInputEnvelope
    connect?: Enumerable<TransactionRecordWhereUniqueInput>
  }

  export type PrivateAssetCreateNestedOneWithoutBaseAssetInput = {
    create?: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutBaseAssetInput
    connect?: PrivateAssetWhereUniqueInput
  }

  export type PublicAssetCreateNestedOneWithoutBaseAssetInput = {
    create?: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PublicAssetCreateOrConnectWithoutBaseAssetInput
    connect?: PublicAssetWhereUniqueInput
  }

  export type TransactionRecordUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<TransactionRecordCreateWithoutAssetInput>, Enumerable<TransactionRecordUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<TransactionRecordCreateOrConnectWithoutAssetInput>
    createMany?: TransactionRecordCreateManyAssetInputEnvelope
    connect?: Enumerable<TransactionRecordWhereUniqueInput>
  }

  export type PrivateAssetUncheckedCreateNestedOneWithoutBaseAssetInput = {
    create?: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutBaseAssetInput
    connect?: PrivateAssetWhereUniqueInput
  }

  export type PublicAssetUncheckedCreateNestedOneWithoutBaseAssetInput = {
    create?: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PublicAssetCreateOrConnectWithoutBaseAssetInput
    connect?: PublicAssetWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PortfolioUpdateOneRequiredWithoutAssetsInput = {
    create?: XOR<PortfolioCreateWithoutAssetsInput, PortfolioUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAssetsInput
    upsert?: PortfolioUpsertWithoutAssetsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<PortfolioUpdateWithoutAssetsInput, PortfolioUncheckedUpdateWithoutAssetsInput>
  }

  export type TransactionRecordUpdateManyWithoutAssetInput = {
    create?: XOR<Enumerable<TransactionRecordCreateWithoutAssetInput>, Enumerable<TransactionRecordUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<TransactionRecordCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<TransactionRecordUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: TransactionRecordCreateManyAssetInputEnvelope
    connect?: Enumerable<TransactionRecordWhereUniqueInput>
    set?: Enumerable<TransactionRecordWhereUniqueInput>
    disconnect?: Enumerable<TransactionRecordWhereUniqueInput>
    delete?: Enumerable<TransactionRecordWhereUniqueInput>
    update?: Enumerable<TransactionRecordUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<TransactionRecordUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<TransactionRecordScalarWhereInput>
  }

  export type PrivateAssetUpdateOneWithoutBaseAssetInput = {
    create?: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutBaseAssetInput
    upsert?: PrivateAssetUpsertWithoutBaseAssetInput
    connect?: PrivateAssetWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PrivateAssetUpdateWithoutBaseAssetInput, PrivateAssetUncheckedUpdateWithoutBaseAssetInput>
  }

  export type PublicAssetUpdateOneWithoutBaseAssetInput = {
    create?: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PublicAssetCreateOrConnectWithoutBaseAssetInput
    upsert?: PublicAssetUpsertWithoutBaseAssetInput
    connect?: PublicAssetWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PublicAssetUpdateWithoutBaseAssetInput, PublicAssetUncheckedUpdateWithoutBaseAssetInput>
  }

  export type TransactionRecordUncheckedUpdateManyWithoutAssetInput = {
    create?: XOR<Enumerable<TransactionRecordCreateWithoutAssetInput>, Enumerable<TransactionRecordUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<TransactionRecordCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<TransactionRecordUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: TransactionRecordCreateManyAssetInputEnvelope
    connect?: Enumerable<TransactionRecordWhereUniqueInput>
    set?: Enumerable<TransactionRecordWhereUniqueInput>
    disconnect?: Enumerable<TransactionRecordWhereUniqueInput>
    delete?: Enumerable<TransactionRecordWhereUniqueInput>
    update?: Enumerable<TransactionRecordUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<TransactionRecordUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<TransactionRecordScalarWhereInput>
  }

  export type PrivateAssetUncheckedUpdateOneWithoutBaseAssetInput = {
    create?: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutBaseAssetInput
    upsert?: PrivateAssetUpsertWithoutBaseAssetInput
    connect?: PrivateAssetWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PrivateAssetUpdateWithoutBaseAssetInput, PrivateAssetUncheckedUpdateWithoutBaseAssetInput>
  }

  export type PublicAssetUncheckedUpdateOneWithoutBaseAssetInput = {
    create?: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
    connectOrCreate?: PublicAssetCreateOrConnectWithoutBaseAssetInput
    upsert?: PublicAssetUpsertWithoutBaseAssetInput
    connect?: PublicAssetWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PublicAssetUpdateWithoutBaseAssetInput, PublicAssetUncheckedUpdateWithoutBaseAssetInput>
  }

  export type AssetCreateNestedOneWithoutPublicAssetInput = {
    create?: XOR<AssetCreateWithoutPublicAssetInput, AssetUncheckedCreateWithoutPublicAssetInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPublicAssetInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutPublicAssetInput = {
    create?: XOR<AssetCreateWithoutPublicAssetInput, AssetUncheckedCreateWithoutPublicAssetInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPublicAssetInput
    upsert?: AssetUpsertWithoutPublicAssetInput
    connect?: AssetWhereUniqueInput
    update?: XOR<AssetUpdateWithoutPublicAssetInput, AssetUncheckedUpdateWithoutPublicAssetInput>
  }

  export type AssetCreateNestedOneWithoutPrivateAssetInput = {
    create?: XOR<AssetCreateWithoutPrivateAssetInput, AssetUncheckedCreateWithoutPrivateAssetInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPrivateAssetInput
    connect?: AssetWhereUniqueInput
  }

  export type HistoricalValueCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<HistoricalValueCreateWithoutAssetInput>, Enumerable<HistoricalValueUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<HistoricalValueCreateOrConnectWithoutAssetInput>
    createMany?: HistoricalValueCreateManyAssetInputEnvelope
    connect?: Enumerable<HistoricalValueWhereUniqueInput>
  }

  export type HistoricalValueUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<HistoricalValueCreateWithoutAssetInput>, Enumerable<HistoricalValueUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<HistoricalValueCreateOrConnectWithoutAssetInput>
    createMany?: HistoricalValueCreateManyAssetInputEnvelope
    connect?: Enumerable<HistoricalValueWhereUniqueInput>
  }

  export type AssetUpdateOneRequiredWithoutPrivateAssetInput = {
    create?: XOR<AssetCreateWithoutPrivateAssetInput, AssetUncheckedCreateWithoutPrivateAssetInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPrivateAssetInput
    upsert?: AssetUpsertWithoutPrivateAssetInput
    connect?: AssetWhereUniqueInput
    update?: XOR<AssetUpdateWithoutPrivateAssetInput, AssetUncheckedUpdateWithoutPrivateAssetInput>
  }

  export type HistoricalValueUpdateManyWithoutAssetInput = {
    create?: XOR<Enumerable<HistoricalValueCreateWithoutAssetInput>, Enumerable<HistoricalValueUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<HistoricalValueCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<HistoricalValueUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: HistoricalValueCreateManyAssetInputEnvelope
    connect?: Enumerable<HistoricalValueWhereUniqueInput>
    set?: Enumerable<HistoricalValueWhereUniqueInput>
    disconnect?: Enumerable<HistoricalValueWhereUniqueInput>
    delete?: Enumerable<HistoricalValueWhereUniqueInput>
    update?: Enumerable<HistoricalValueUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<HistoricalValueUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<HistoricalValueScalarWhereInput>
  }

  export type HistoricalValueUncheckedUpdateManyWithoutAssetInput = {
    create?: XOR<Enumerable<HistoricalValueCreateWithoutAssetInput>, Enumerable<HistoricalValueUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<HistoricalValueCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<HistoricalValueUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: HistoricalValueCreateManyAssetInputEnvelope
    connect?: Enumerable<HistoricalValueWhereUniqueInput>
    set?: Enumerable<HistoricalValueWhereUniqueInput>
    disconnect?: Enumerable<HistoricalValueWhereUniqueInput>
    delete?: Enumerable<HistoricalValueWhereUniqueInput>
    update?: Enumerable<HistoricalValueUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<HistoricalValueUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<HistoricalValueScalarWhereInput>
  }

  export type PrivateAssetCreateNestedOneWithoutHistoricalValuesInput = {
    create?: XOR<PrivateAssetCreateWithoutHistoricalValuesInput, PrivateAssetUncheckedCreateWithoutHistoricalValuesInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutHistoricalValuesInput
    connect?: PrivateAssetWhereUniqueInput
  }

  export type PrivateAssetUpdateOneRequiredWithoutHistoricalValuesInput = {
    create?: XOR<PrivateAssetCreateWithoutHistoricalValuesInput, PrivateAssetUncheckedCreateWithoutHistoricalValuesInput>
    connectOrCreate?: PrivateAssetCreateOrConnectWithoutHistoricalValuesInput
    upsert?: PrivateAssetUpsertWithoutHistoricalValuesInput
    connect?: PrivateAssetWhereUniqueInput
    update?: XOR<PrivateAssetUpdateWithoutHistoricalValuesInput, PrivateAssetUncheckedUpdateWithoutHistoricalValuesInput>
  }

  export type AssetCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<Enumerable<AssetCreateWithoutPortfolioInput>, Enumerable<AssetUncheckedCreateWithoutPortfolioInput>>
    connectOrCreate?: Enumerable<AssetCreateOrConnectWithoutPortfolioInput>
    createMany?: AssetCreateManyPortfolioInputEnvelope
    connect?: Enumerable<AssetWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
  }

  export type AssetUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<Enumerable<AssetCreateWithoutPortfolioInput>, Enumerable<AssetUncheckedCreateWithoutPortfolioInput>>
    connectOrCreate?: Enumerable<AssetCreateOrConnectWithoutPortfolioInput>
    createMany?: AssetCreateManyPortfolioInputEnvelope
    connect?: Enumerable<AssetWhereUniqueInput>
  }

  export type AssetUpdateManyWithoutPortfolioInput = {
    create?: XOR<Enumerable<AssetCreateWithoutPortfolioInput>, Enumerable<AssetUncheckedCreateWithoutPortfolioInput>>
    connectOrCreate?: Enumerable<AssetCreateOrConnectWithoutPortfolioInput>
    upsert?: Enumerable<AssetUpsertWithWhereUniqueWithoutPortfolioInput>
    createMany?: AssetCreateManyPortfolioInputEnvelope
    connect?: Enumerable<AssetWhereUniqueInput>
    set?: Enumerable<AssetWhereUniqueInput>
    disconnect?: Enumerable<AssetWhereUniqueInput>
    delete?: Enumerable<AssetWhereUniqueInput>
    update?: Enumerable<AssetUpdateWithWhereUniqueWithoutPortfolioInput>
    updateMany?: Enumerable<AssetUpdateManyWithWhereWithoutPortfolioInput>
    deleteMany?: Enumerable<AssetScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutPortfoliosInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    upsert?: UserUpsertWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type AssetUncheckedUpdateManyWithoutPortfolioInput = {
    create?: XOR<Enumerable<AssetCreateWithoutPortfolioInput>, Enumerable<AssetUncheckedCreateWithoutPortfolioInput>>
    connectOrCreate?: Enumerable<AssetCreateOrConnectWithoutPortfolioInput>
    upsert?: Enumerable<AssetUpsertWithWhereUniqueWithoutPortfolioInput>
    createMany?: AssetCreateManyPortfolioInputEnvelope
    connect?: Enumerable<AssetWhereUniqueInput>
    set?: Enumerable<AssetWhereUniqueInput>
    disconnect?: Enumerable<AssetWhereUniqueInput>
    delete?: Enumerable<AssetWhereUniqueInput>
    update?: Enumerable<AssetUpdateWithWhereUniqueWithoutPortfolioInput>
    updateMany?: Enumerable<AssetUpdateManyWithWhereWithoutPortfolioInput>
    deleteMany?: Enumerable<AssetScalarWhereInput>
  }

  export type AssetCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput
    connect?: AssetWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: TransactionType
  }

  export type AssetUpdateOneRequiredWithoutTransactionsInput = {
    create?: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput
    upsert?: AssetUpsertWithoutTransactionsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<AssetUpdateWithoutTransactionsInput, AssetUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumTransactionTypeFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeFilter | TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeWithAggregatesFilter | TransactionType
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumTransactionTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumTransactionTypeFilter
    _max?: NestedEnumTransactionTypeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumTransactionTypeFilter
  }

  export type PortfolioCreateWithoutOwnerInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    assets?: AssetCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutOwnerInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutOwnerInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutOwnerInput, PortfolioUncheckedCreateWithoutOwnerInput>
  }

  export type PortfolioCreateManyOwnerInputEnvelope = {
    data: Enumerable<PortfolioCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type PortfolioUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutOwnerInput, PortfolioUncheckedUpdateWithoutOwnerInput>
    create: XOR<PortfolioCreateWithoutOwnerInput, PortfolioUncheckedCreateWithoutOwnerInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutOwnerInput, PortfolioUncheckedUpdateWithoutOwnerInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutOwnerInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutPortfoliosInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: Enumerable<PortfolioScalarWhereInput>
    OR?: Enumerable<PortfolioScalarWhereInput>
    NOT?: Enumerable<PortfolioScalarWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    userId?: IntFilter | number
  }

  export type PortfolioCreateWithoutAssetsInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    owner: UserCreateNestedOneWithoutPortfoliosInput
  }

  export type PortfolioUncheckedCreateWithoutAssetsInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    userId: number
  }

  export type PortfolioCreateOrConnectWithoutAssetsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutAssetsInput, PortfolioUncheckedCreateWithoutAssetsInput>
  }

  export type TransactionRecordCreateWithoutAssetInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    transactionType: TransactionType
  }

  export type TransactionRecordUncheckedCreateWithoutAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    transactionType: TransactionType
  }

  export type TransactionRecordCreateOrConnectWithoutAssetInput = {
    where: TransactionRecordWhereUniqueInput
    create: XOR<TransactionRecordCreateWithoutAssetInput, TransactionRecordUncheckedCreateWithoutAssetInput>
  }

  export type TransactionRecordCreateManyAssetInputEnvelope = {
    data: Enumerable<TransactionRecordCreateManyAssetInput>
    skipDuplicates?: boolean
  }

  export type PrivateAssetCreateWithoutBaseAssetInput = {
    historicalValues?: HistoricalValueCreateNestedManyWithoutAssetInput
  }

  export type PrivateAssetUncheckedCreateWithoutBaseAssetInput = {
    historicalValues?: HistoricalValueUncheckedCreateNestedManyWithoutAssetInput
  }

  export type PrivateAssetCreateOrConnectWithoutBaseAssetInput = {
    where: PrivateAssetWhereUniqueInput
    create: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
  }

  export type PublicAssetCreateWithoutBaseAssetInput = {
    symbol?: string | null
    market?: string | null
  }

  export type PublicAssetUncheckedCreateWithoutBaseAssetInput = {
    symbol?: string | null
    market?: string | null
  }

  export type PublicAssetCreateOrConnectWithoutBaseAssetInput = {
    where: PublicAssetWhereUniqueInput
    create: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
  }

  export type PortfolioUpsertWithoutAssetsInput = {
    update: XOR<PortfolioUpdateWithoutAssetsInput, PortfolioUncheckedUpdateWithoutAssetsInput>
    create: XOR<PortfolioCreateWithoutAssetsInput, PortfolioUncheckedCreateWithoutAssetsInput>
  }

  export type PortfolioUpdateWithoutAssetsInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutPortfoliosInput
  }

  export type PortfolioUncheckedUpdateWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionRecordUpsertWithWhereUniqueWithoutAssetInput = {
    where: TransactionRecordWhereUniqueInput
    update: XOR<TransactionRecordUpdateWithoutAssetInput, TransactionRecordUncheckedUpdateWithoutAssetInput>
    create: XOR<TransactionRecordCreateWithoutAssetInput, TransactionRecordUncheckedCreateWithoutAssetInput>
  }

  export type TransactionRecordUpdateWithWhereUniqueWithoutAssetInput = {
    where: TransactionRecordWhereUniqueInput
    data: XOR<TransactionRecordUpdateWithoutAssetInput, TransactionRecordUncheckedUpdateWithoutAssetInput>
  }

  export type TransactionRecordUpdateManyWithWhereWithoutAssetInput = {
    where: TransactionRecordScalarWhereInput
    data: XOR<TransactionRecordUpdateManyMutationInput, TransactionRecordUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type TransactionRecordScalarWhereInput = {
    AND?: Enumerable<TransactionRecordScalarWhereInput>
    OR?: Enumerable<TransactionRecordScalarWhereInput>
    NOT?: Enumerable<TransactionRecordScalarWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    note?: StringNullableFilter | string | null
    currency?: StringFilter | string
    unitPrice?: IntFilter | number
    assetQuantity?: IntFilter | number
    assetId?: IntFilter | number
    transactionType?: EnumTransactionTypeFilter | TransactionType
  }

  export type PrivateAssetUpsertWithoutBaseAssetInput = {
    update: XOR<PrivateAssetUpdateWithoutBaseAssetInput, PrivateAssetUncheckedUpdateWithoutBaseAssetInput>
    create: XOR<PrivateAssetCreateWithoutBaseAssetInput, PrivateAssetUncheckedCreateWithoutBaseAssetInput>
  }

  export type PrivateAssetUpdateWithoutBaseAssetInput = {
    historicalValues?: HistoricalValueUpdateManyWithoutAssetInput
  }

  export type PrivateAssetUncheckedUpdateWithoutBaseAssetInput = {
    historicalValues?: HistoricalValueUncheckedUpdateManyWithoutAssetInput
  }

  export type PublicAssetUpsertWithoutBaseAssetInput = {
    update: XOR<PublicAssetUpdateWithoutBaseAssetInput, PublicAssetUncheckedUpdateWithoutBaseAssetInput>
    create: XOR<PublicAssetCreateWithoutBaseAssetInput, PublicAssetUncheckedCreateWithoutBaseAssetInput>
  }

  export type PublicAssetUpdateWithoutBaseAssetInput = {
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicAssetUncheckedUpdateWithoutBaseAssetInput = {
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateWithoutPublicAssetInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolio: PortfolioCreateNestedOneWithoutAssetsInput
    transactions?: TransactionRecordCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUncheckedCreateWithoutPublicAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolioId: number
    transactions?: TransactionRecordUncheckedCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetCreateOrConnectWithoutPublicAssetInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutPublicAssetInput, AssetUncheckedCreateWithoutPublicAssetInput>
  }

  export type AssetUpsertWithoutPublicAssetInput = {
    update: XOR<AssetUpdateWithoutPublicAssetInput, AssetUncheckedUpdateWithoutPublicAssetInput>
    create: XOR<AssetCreateWithoutPublicAssetInput, AssetUncheckedCreateWithoutPublicAssetInput>
  }

  export type AssetUpdateWithoutPublicAssetInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolio?: PortfolioUpdateOneRequiredWithoutAssetsInput
    transactions?: TransactionRecordUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateWithoutPublicAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionRecordUncheckedUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedUpdateOneWithoutBaseAssetInput
  }

  export type AssetCreateWithoutPrivateAssetInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolio: PortfolioCreateNestedOneWithoutAssetsInput
    transactions?: TransactionRecordCreateNestedManyWithoutAssetInput
    publicAsset?: PublicAssetCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUncheckedCreateWithoutPrivateAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolioId: number
    transactions?: TransactionRecordUncheckedCreateNestedManyWithoutAssetInput
    publicAsset?: PublicAssetUncheckedCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetCreateOrConnectWithoutPrivateAssetInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutPrivateAssetInput, AssetUncheckedCreateWithoutPrivateAssetInput>
  }

  export type HistoricalValueCreateWithoutAssetInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
  }

  export type HistoricalValueUncheckedCreateWithoutAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
  }

  export type HistoricalValueCreateOrConnectWithoutAssetInput = {
    where: HistoricalValueWhereUniqueInput
    create: XOR<HistoricalValueCreateWithoutAssetInput, HistoricalValueUncheckedCreateWithoutAssetInput>
  }

  export type HistoricalValueCreateManyAssetInputEnvelope = {
    data: Enumerable<HistoricalValueCreateManyAssetInput>
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithoutPrivateAssetInput = {
    update: XOR<AssetUpdateWithoutPrivateAssetInput, AssetUncheckedUpdateWithoutPrivateAssetInput>
    create: XOR<AssetCreateWithoutPrivateAssetInput, AssetUncheckedCreateWithoutPrivateAssetInput>
  }

  export type AssetUpdateWithoutPrivateAssetInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolio?: PortfolioUpdateOneRequiredWithoutAssetsInput
    transactions?: TransactionRecordUpdateManyWithoutAssetInput
    publicAsset?: PublicAssetUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateWithoutPrivateAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionRecordUncheckedUpdateManyWithoutAssetInput
    publicAsset?: PublicAssetUncheckedUpdateOneWithoutBaseAssetInput
  }

  export type HistoricalValueUpsertWithWhereUniqueWithoutAssetInput = {
    where: HistoricalValueWhereUniqueInput
    update: XOR<HistoricalValueUpdateWithoutAssetInput, HistoricalValueUncheckedUpdateWithoutAssetInput>
    create: XOR<HistoricalValueCreateWithoutAssetInput, HistoricalValueUncheckedCreateWithoutAssetInput>
  }

  export type HistoricalValueUpdateWithWhereUniqueWithoutAssetInput = {
    where: HistoricalValueWhereUniqueInput
    data: XOR<HistoricalValueUpdateWithoutAssetInput, HistoricalValueUncheckedUpdateWithoutAssetInput>
  }

  export type HistoricalValueUpdateManyWithWhereWithoutAssetInput = {
    where: HistoricalValueScalarWhereInput
    data: XOR<HistoricalValueUpdateManyMutationInput, HistoricalValueUncheckedUpdateManyWithoutHistoricalValuesInput>
  }

  export type HistoricalValueScalarWhereInput = {
    AND?: Enumerable<HistoricalValueScalarWhereInput>
    OR?: Enumerable<HistoricalValueScalarWhereInput>
    NOT?: Enumerable<HistoricalValueScalarWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    date?: DateTimeFilter | Date | string
    unitPrice?: IntFilter | number
    currency?: StringFilter | string
    description?: StringNullableFilter | string | null
    assetId?: IntFilter | number
  }

  export type PrivateAssetCreateWithoutHistoricalValuesInput = {
    baseAsset: AssetCreateNestedOneWithoutPrivateAssetInput
  }

  export type PrivateAssetUncheckedCreateWithoutHistoricalValuesInput = {
    id: number
  }

  export type PrivateAssetCreateOrConnectWithoutHistoricalValuesInput = {
    where: PrivateAssetWhereUniqueInput
    create: XOR<PrivateAssetCreateWithoutHistoricalValuesInput, PrivateAssetUncheckedCreateWithoutHistoricalValuesInput>
  }

  export type PrivateAssetUpsertWithoutHistoricalValuesInput = {
    update: XOR<PrivateAssetUpdateWithoutHistoricalValuesInput, PrivateAssetUncheckedUpdateWithoutHistoricalValuesInput>
    create: XOR<PrivateAssetCreateWithoutHistoricalValuesInput, PrivateAssetUncheckedCreateWithoutHistoricalValuesInput>
  }

  export type PrivateAssetUpdateWithoutHistoricalValuesInput = {
    baseAsset?: AssetUpdateOneRequiredWithoutPrivateAssetInput
  }

  export type PrivateAssetUncheckedUpdateWithoutHistoricalValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type AssetCreateWithoutPortfolioInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    transactions?: TransactionRecordCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUncheckedCreateWithoutPortfolioInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    transactions?: TransactionRecordUncheckedCreateNestedManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetCreateOrConnectWithoutPortfolioInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutPortfolioInput, AssetUncheckedCreateWithoutPortfolioInput>
  }

  export type AssetCreateManyPortfolioInputEnvelope = {
    data: Enumerable<AssetCreateManyPortfolioInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPortfoliosInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutPortfoliosInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutPortfoliosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
  }

  export type AssetUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutPortfolioInput, AssetUncheckedUpdateWithoutPortfolioInput>
    create: XOR<AssetCreateWithoutPortfolioInput, AssetUncheckedCreateWithoutPortfolioInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutPortfolioInput, AssetUncheckedUpdateWithoutPortfolioInput>
  }

  export type AssetUpdateManyWithWhereWithoutPortfolioInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutAssetsInput>
  }

  export type AssetScalarWhereInput = {
    AND?: Enumerable<AssetScalarWhereInput>
    OR?: Enumerable<AssetScalarWhereInput>
    NOT?: Enumerable<AssetScalarWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    quantity?: IntFilter | number
    portfolioId?: IntFilter | number
  }

  export type UserUpsertWithoutPortfoliosInput = {
    update: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
  }

  export type UserUpdateWithoutPortfoliosInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPortfoliosInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateWithoutTransactionsInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolio: PortfolioCreateNestedOneWithoutAssetsInput
    privateAsset?: PrivateAssetCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetUncheckedCreateWithoutTransactionsInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
    portfolioId: number
    privateAsset?: PrivateAssetUncheckedCreateNestedOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedCreateNestedOneWithoutBaseAssetInput
  }

  export type AssetCreateOrConnectWithoutTransactionsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
  }

  export type AssetUpsertWithoutTransactionsInput = {
    update: XOR<AssetUpdateWithoutTransactionsInput, AssetUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AssetCreateWithoutTransactionsInput, AssetUncheckedCreateWithoutTransactionsInput>
  }

  export type AssetUpdateWithoutTransactionsInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolio?: PortfolioUpdateOneRequiredWithoutAssetsInput
    privateAsset?: PrivateAssetUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    portfolioId?: IntFieldUpdateOperationsInput | number
    privateAsset?: PrivateAssetUncheckedUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedUpdateOneWithoutBaseAssetInput
  }

  export type PortfolioCreateManyOwnerInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
  }

  export type PortfolioUpdateWithoutOwnerInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUpdateManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedUpdateManyWithoutPortfoliosInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionRecordCreateManyAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    note?: string | null
    currency: string
    unitPrice: number
    assetQuantity: number
    transactionType: TransactionType
  }

  export type TransactionRecordUpdateWithoutAssetInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type TransactionRecordUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type TransactionRecordUncheckedUpdateManyWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    assetQuantity?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
  }

  export type HistoricalValueCreateManyAssetInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    date?: Date | string
    unitPrice: number
    currency: string
    description?: string | null
  }

  export type HistoricalValueUpdateWithoutAssetInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricalValueUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricalValueUncheckedUpdateManyWithoutHistoricalValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateManyPortfolioInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    name: string
    description?: string | null
    quantity?: number
  }

  export type AssetUpdateWithoutPortfolioInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionRecordUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionRecordUncheckedUpdateManyWithoutAssetInput
    privateAsset?: PrivateAssetUncheckedUpdateOneWithoutBaseAssetInput
    publicAsset?: PublicAssetUncheckedUpdateOneWithoutBaseAssetInput
  }

  export type AssetUncheckedUpdateManyWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}