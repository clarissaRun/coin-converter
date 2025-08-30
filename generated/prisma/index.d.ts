
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model FavoriteCurrency
 * 
 */
export type FavoriteCurrency = $Result.DefaultSelection<Prisma.$FavoriteCurrencyPayload>
/**
 * Model ExchangeRate
 * 
 */
export type ExchangeRate = $Result.DefaultSelection<Prisma.$ExchangeRatePayload>
/**
 * Model ConversionHistory
 * 
 */
export type ConversionHistory = $Result.DefaultSelection<Prisma.$ConversionHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CurrencyType: {
  FIAT: 'FIAT',
  CRYPTO: 'CRYPTO'
};

export type CurrencyType = (typeof CurrencyType)[keyof typeof CurrencyType]


export const RateSource: {
  BCV: 'BCV',
  BINANCE: 'BINANCE'
};

export type RateSource = (typeof RateSource)[keyof typeof RateSource]

}

export type CurrencyType = $Enums.CurrencyType

export const CurrencyType: typeof $Enums.CurrencyType

export type RateSource = $Enums.RateSource

export const RateSource: typeof $Enums.RateSource

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteCurrency`: Exposes CRUD operations for the **FavoriteCurrency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteCurrencies
    * const favoriteCurrencies = await prisma.favoriteCurrency.findMany()
    * ```
    */
  get favoriteCurrency(): Prisma.FavoriteCurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeRate`: Exposes CRUD operations for the **ExchangeRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeRates
    * const exchangeRates = await prisma.exchangeRate.findMany()
    * ```
    */
  get exchangeRate(): Prisma.ExchangeRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversionHistory`: Exposes CRUD operations for the **ConversionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversionHistories
    * const conversionHistories = await prisma.conversionHistory.findMany()
    * ```
    */
  get conversionHistory(): Prisma.ConversionHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Currency: 'Currency',
    FavoriteCurrency: 'FavoriteCurrency',
    ExchangeRate: 'ExchangeRate',
    ConversionHistory: 'ConversionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "currency" | "favoriteCurrency" | "exchangeRate" | "conversionHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      FavoriteCurrency: {
        payload: Prisma.$FavoriteCurrencyPayload<ExtArgs>
        fields: Prisma.FavoriteCurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteCurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteCurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          findFirst: {
            args: Prisma.FavoriteCurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteCurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          findMany: {
            args: Prisma.FavoriteCurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>[]
          }
          create: {
            args: Prisma.FavoriteCurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          createMany: {
            args: Prisma.FavoriteCurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>[]
          }
          delete: {
            args: Prisma.FavoriteCurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          update: {
            args: Prisma.FavoriteCurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteCurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteCurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteCurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteCurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteCurrencyPayload>
          }
          aggregate: {
            args: Prisma.FavoriteCurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteCurrency>
          }
          groupBy: {
            args: Prisma.FavoriteCurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCurrencyCountAggregateOutputType> | number
          }
        }
      }
      ExchangeRate: {
        payload: Prisma.$ExchangeRatePayload<ExtArgs>
        fields: Prisma.ExchangeRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findFirst: {
            args: Prisma.ExchangeRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findMany: {
            args: Prisma.ExchangeRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          create: {
            args: Prisma.ExchangeRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          createMany: {
            args: Prisma.ExchangeRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          delete: {
            args: Prisma.ExchangeRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          update: {
            args: Prisma.ExchangeRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          aggregate: {
            args: Prisma.ExchangeRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeRate>
          }
          groupBy: {
            args: Prisma.ExchangeRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeRateCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateCountAggregateOutputType> | number
          }
        }
      }
      ConversionHistory: {
        payload: Prisma.$ConversionHistoryPayload<ExtArgs>
        fields: Prisma.ConversionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ConversionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          findMany: {
            args: Prisma.ConversionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          create: {
            args: Prisma.ConversionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          createMany: {
            args: Prisma.ConversionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          delete: {
            args: Prisma.ConversionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          update: {
            args: Prisma.ConversionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ConversionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ConversionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ConversionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversionHistory>
          }
          groupBy: {
            args: Prisma.ConversionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ConversionHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    currency?: CurrencyOmit
    favoriteCurrency?: FavoriteCurrencyOmit
    exchangeRate?: ExchangeRateOmit
    conversionHistory?: ConversionHistoryOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favoriteCurrencies: number
    conversions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteCurrencies?: boolean | UserCountOutputTypeCountFavoriteCurrenciesArgs
    conversions?: boolean | UserCountOutputTypeCountConversionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteCurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteCurrencyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionHistoryWhereInput
  }


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    favoriteCurrencies: number
    ratesFrom: number
    ratesTo: number
    conversionsFrom: number
    conversionsTo: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteCurrencies?: boolean | CurrencyCountOutputTypeCountFavoriteCurrenciesArgs
    ratesFrom?: boolean | CurrencyCountOutputTypeCountRatesFromArgs
    ratesTo?: boolean | CurrencyCountOutputTypeCountRatesToArgs
    conversionsFrom?: boolean | CurrencyCountOutputTypeCountConversionsFromArgs
    conversionsTo?: boolean | CurrencyCountOutputTypeCountConversionsToArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountFavoriteCurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteCurrencyWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountRatesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountRatesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountConversionsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionHistoryWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountConversionsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favoriteCurrencies?: boolean | User$favoriteCurrenciesArgs<ExtArgs>
    conversions?: boolean | User$conversionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteCurrencies?: boolean | User$favoriteCurrenciesArgs<ExtArgs>
    conversions?: boolean | User$conversionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favoriteCurrencies: Prisma.$FavoriteCurrencyPayload<ExtArgs>[]
      conversions: Prisma.$ConversionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteCurrencies<T extends User$favoriteCurrenciesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteCurrenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversions<T extends User$conversionsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favoriteCurrencies
   */
  export type User$favoriteCurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    where?: FavoriteCurrencyWhereInput
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    cursor?: FavoriteCurrencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteCurrencyScalarFieldEnum | FavoriteCurrencyScalarFieldEnum[]
  }

  /**
   * User.conversions
   */
  export type User$conversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    where?: ConversionHistoryWhereInput
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    cursor?: ConversionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    rate: number | null
  }

  export type CurrencySumAggregateOutputType = {
    rate: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    symbol: string | null
    type: $Enums.CurrencyType | null
    rate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    symbol: string | null
    type: $Enums.CurrencyType | null
    rate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    name: number
    code: number
    symbol: number
    type: number
    rate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    rate?: true
  }

  export type CurrencySumAggregateInputType = {
    rate?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    rate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    rate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    type?: true
    rate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate: number
    createdAt: Date
    updatedAt: Date
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    rate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favoriteCurrencies?: boolean | Currency$favoriteCurrenciesArgs<ExtArgs>
    ratesFrom?: boolean | Currency$ratesFromArgs<ExtArgs>
    ratesTo?: boolean | Currency$ratesToArgs<ExtArgs>
    conversionsFrom?: boolean | Currency$conversionsFromArgs<ExtArgs>
    conversionsTo?: boolean | Currency$conversionsToArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    rate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    rate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    type?: boolean
    rate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "symbol" | "type" | "rate" | "createdAt" | "updatedAt", ExtArgs["result"]["currency"]>
  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteCurrencies?: boolean | Currency$favoriteCurrenciesArgs<ExtArgs>
    ratesFrom?: boolean | Currency$ratesFromArgs<ExtArgs>
    ratesTo?: boolean | Currency$ratesToArgs<ExtArgs>
    conversionsFrom?: boolean | Currency$conversionsFromArgs<ExtArgs>
    conversionsTo?: boolean | Currency$conversionsToArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      favoriteCurrencies: Prisma.$FavoriteCurrencyPayload<ExtArgs>[]
      ratesFrom: Prisma.$ExchangeRatePayload<ExtArgs>[]
      ratesTo: Prisma.$ExchangeRatePayload<ExtArgs>[]
      conversionsFrom: Prisma.$ConversionHistoryPayload<ExtArgs>[]
      conversionsTo: Prisma.$ConversionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      symbol: string
      type: $Enums.CurrencyType
      rate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {CurrencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
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
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteCurrencies<T extends Currency$favoriteCurrenciesArgs<ExtArgs> = {}>(args?: Subset<T, Currency$favoriteCurrenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratesFrom<T extends Currency$ratesFromArgs<ExtArgs> = {}>(args?: Subset<T, Currency$ratesFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratesTo<T extends Currency$ratesToArgs<ExtArgs> = {}>(args?: Subset<T, Currency$ratesToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversionsFrom<T extends Currency$conversionsFromArgs<ExtArgs> = {}>(args?: Subset<T, Currency$conversionsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversionsTo<T extends Currency$conversionsToArgs<ExtArgs> = {}>(args?: Subset<T, Currency$conversionsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currency model
   */
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'String'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly code: FieldRef<"Currency", 'String'>
    readonly symbol: FieldRef<"Currency", 'String'>
    readonly type: FieldRef<"Currency", 'CurrencyType'>
    readonly rate: FieldRef<"Currency", 'Float'>
    readonly createdAt: FieldRef<"Currency", 'DateTime'>
    readonly updatedAt: FieldRef<"Currency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency updateManyAndReturn
   */
  export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to delete.
     */
    limit?: number
  }

  /**
   * Currency.favoriteCurrencies
   */
  export type Currency$favoriteCurrenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    where?: FavoriteCurrencyWhereInput
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    cursor?: FavoriteCurrencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteCurrencyScalarFieldEnum | FavoriteCurrencyScalarFieldEnum[]
  }

  /**
   * Currency.ratesFrom
   */
  export type Currency$ratesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    cursor?: ExchangeRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * Currency.ratesTo
   */
  export type Currency$ratesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    cursor?: ExchangeRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * Currency.conversionsFrom
   */
  export type Currency$conversionsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    where?: ConversionHistoryWhereInput
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    cursor?: ConversionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * Currency.conversionsTo
   */
  export type Currency$conversionsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    where?: ConversionHistoryWhereInput
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    cursor?: ConversionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteCurrency
   */

  export type AggregateFavoriteCurrency = {
    _count: FavoriteCurrencyCountAggregateOutputType | null
    _min: FavoriteCurrencyMinAggregateOutputType | null
    _max: FavoriteCurrencyMaxAggregateOutputType | null
  }

  export type FavoriteCurrencyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currencyId: string | null
    createdAt: Date | null
  }

  export type FavoriteCurrencyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currencyId: string | null
    createdAt: Date | null
  }

  export type FavoriteCurrencyCountAggregateOutputType = {
    id: number
    userId: number
    currencyId: number
    createdAt: number
    _all: number
  }


  export type FavoriteCurrencyMinAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    createdAt?: true
  }

  export type FavoriteCurrencyMaxAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    createdAt?: true
  }

  export type FavoriteCurrencyCountAggregateInputType = {
    id?: true
    userId?: true
    currencyId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteCurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteCurrency to aggregate.
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCurrencies to fetch.
     */
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteCurrencies
    **/
    _count?: true | FavoriteCurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteCurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteCurrencyMaxAggregateInputType
  }

  export type GetFavoriteCurrencyAggregateType<T extends FavoriteCurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteCurrency[P]>
      : GetScalarType<T[P], AggregateFavoriteCurrency[P]>
  }




  export type FavoriteCurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteCurrencyWhereInput
    orderBy?: FavoriteCurrencyOrderByWithAggregationInput | FavoriteCurrencyOrderByWithAggregationInput[]
    by: FavoriteCurrencyScalarFieldEnum[] | FavoriteCurrencyScalarFieldEnum
    having?: FavoriteCurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCurrencyCountAggregateInputType | true
    _min?: FavoriteCurrencyMinAggregateInputType
    _max?: FavoriteCurrencyMaxAggregateInputType
  }

  export type FavoriteCurrencyGroupByOutputType = {
    id: string
    userId: string
    currencyId: string
    createdAt: Date
    _count: FavoriteCurrencyCountAggregateOutputType | null
    _min: FavoriteCurrencyMinAggregateOutputType | null
    _max: FavoriteCurrencyMaxAggregateOutputType | null
  }

  type GetFavoriteCurrencyGroupByPayload<T extends FavoriteCurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteCurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteCurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteCurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteCurrencyGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteCurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteCurrency"]>

  export type FavoriteCurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteCurrency"]>

  export type FavoriteCurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteCurrency"]>

  export type FavoriteCurrencySelectScalar = {
    id?: boolean
    userId?: boolean
    currencyId?: boolean
    createdAt?: boolean
  }

  export type FavoriteCurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currencyId" | "createdAt", ExtArgs["result"]["favoriteCurrency"]>
  export type FavoriteCurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type FavoriteCurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type FavoriteCurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $FavoriteCurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteCurrency"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      currency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currencyId: string
      createdAt: Date
    }, ExtArgs["result"]["favoriteCurrency"]>
    composites: {}
  }

  type FavoriteCurrencyGetPayload<S extends boolean | null | undefined | FavoriteCurrencyDefaultArgs> = $Result.GetResult<Prisma.$FavoriteCurrencyPayload, S>

  type FavoriteCurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteCurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCurrencyCountAggregateInputType | true
    }

  export interface FavoriteCurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteCurrency'], meta: { name: 'FavoriteCurrency' } }
    /**
     * Find zero or one FavoriteCurrency that matches the filter.
     * @param {FavoriteCurrencyFindUniqueArgs} args - Arguments to find a FavoriteCurrency
     * @example
     * // Get one FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteCurrencyFindUniqueArgs>(args: SelectSubset<T, FavoriteCurrencyFindUniqueArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteCurrency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteCurrencyFindUniqueOrThrowArgs} args - Arguments to find a FavoriteCurrency
     * @example
     * // Get one FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteCurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteCurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteCurrency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyFindFirstArgs} args - Arguments to find a FavoriteCurrency
     * @example
     * // Get one FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteCurrencyFindFirstArgs>(args?: SelectSubset<T, FavoriteCurrencyFindFirstArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteCurrency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyFindFirstOrThrowArgs} args - Arguments to find a FavoriteCurrency
     * @example
     * // Get one FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteCurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteCurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteCurrencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteCurrencies
     * const favoriteCurrencies = await prisma.favoriteCurrency.findMany()
     * 
     * // Get first 10 FavoriteCurrencies
     * const favoriteCurrencies = await prisma.favoriteCurrency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteCurrencyWithIdOnly = await prisma.favoriteCurrency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteCurrencyFindManyArgs>(args?: SelectSubset<T, FavoriteCurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteCurrency.
     * @param {FavoriteCurrencyCreateArgs} args - Arguments to create a FavoriteCurrency.
     * @example
     * // Create one FavoriteCurrency
     * const FavoriteCurrency = await prisma.favoriteCurrency.create({
     *   data: {
     *     // ... data to create a FavoriteCurrency
     *   }
     * })
     * 
     */
    create<T extends FavoriteCurrencyCreateArgs>(args: SelectSubset<T, FavoriteCurrencyCreateArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteCurrencies.
     * @param {FavoriteCurrencyCreateManyArgs} args - Arguments to create many FavoriteCurrencies.
     * @example
     * // Create many FavoriteCurrencies
     * const favoriteCurrency = await prisma.favoriteCurrency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCurrencyCreateManyArgs>(args?: SelectSubset<T, FavoriteCurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteCurrencies and returns the data saved in the database.
     * @param {FavoriteCurrencyCreateManyAndReturnArgs} args - Arguments to create many FavoriteCurrencies.
     * @example
     * // Create many FavoriteCurrencies
     * const favoriteCurrency = await prisma.favoriteCurrency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteCurrencies and only return the `id`
     * const favoriteCurrencyWithIdOnly = await prisma.favoriteCurrency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteCurrency.
     * @param {FavoriteCurrencyDeleteArgs} args - Arguments to delete one FavoriteCurrency.
     * @example
     * // Delete one FavoriteCurrency
     * const FavoriteCurrency = await prisma.favoriteCurrency.delete({
     *   where: {
     *     // ... filter to delete one FavoriteCurrency
     *   }
     * })
     * 
     */
    delete<T extends FavoriteCurrencyDeleteArgs>(args: SelectSubset<T, FavoriteCurrencyDeleteArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteCurrency.
     * @param {FavoriteCurrencyUpdateArgs} args - Arguments to update one FavoriteCurrency.
     * @example
     * // Update one FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteCurrencyUpdateArgs>(args: SelectSubset<T, FavoriteCurrencyUpdateArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteCurrencies.
     * @param {FavoriteCurrencyDeleteManyArgs} args - Arguments to filter FavoriteCurrencies to delete.
     * @example
     * // Delete a few FavoriteCurrencies
     * const { count } = await prisma.favoriteCurrency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteCurrencyDeleteManyArgs>(args?: SelectSubset<T, FavoriteCurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteCurrencies
     * const favoriteCurrency = await prisma.favoriteCurrency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteCurrencyUpdateManyArgs>(args: SelectSubset<T, FavoriteCurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteCurrencies and returns the data updated in the database.
     * @param {FavoriteCurrencyUpdateManyAndReturnArgs} args - Arguments to update many FavoriteCurrencies.
     * @example
     * // Update many FavoriteCurrencies
     * const favoriteCurrency = await prisma.favoriteCurrency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteCurrencies and only return the `id`
     * const favoriteCurrencyWithIdOnly = await prisma.favoriteCurrency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteCurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteCurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteCurrency.
     * @param {FavoriteCurrencyUpsertArgs} args - Arguments to update or create a FavoriteCurrency.
     * @example
     * // Update or create a FavoriteCurrency
     * const favoriteCurrency = await prisma.favoriteCurrency.upsert({
     *   create: {
     *     // ... data to create a FavoriteCurrency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteCurrency we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteCurrencyUpsertArgs>(args: SelectSubset<T, FavoriteCurrencyUpsertArgs<ExtArgs>>): Prisma__FavoriteCurrencyClient<$Result.GetResult<Prisma.$FavoriteCurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyCountArgs} args - Arguments to filter FavoriteCurrencies to count.
     * @example
     * // Count the number of FavoriteCurrencies
     * const count = await prisma.favoriteCurrency.count({
     *   where: {
     *     // ... the filter for the FavoriteCurrencies we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCurrencyCountArgs>(
      args?: Subset<T, FavoriteCurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteCurrencyAggregateArgs>(args: Subset<T, FavoriteCurrencyAggregateArgs>): Prisma.PrismaPromise<GetFavoriteCurrencyAggregateType<T>>

    /**
     * Group by FavoriteCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCurrencyGroupByArgs} args - Group by arguments.
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
      T extends FavoriteCurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteCurrencyGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteCurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteCurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteCurrency model
   */
  readonly fields: FavoriteCurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteCurrency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteCurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteCurrency model
   */
  interface FavoriteCurrencyFieldRefs {
    readonly id: FieldRef<"FavoriteCurrency", 'String'>
    readonly userId: FieldRef<"FavoriteCurrency", 'String'>
    readonly currencyId: FieldRef<"FavoriteCurrency", 'String'>
    readonly createdAt: FieldRef<"FavoriteCurrency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteCurrency findUnique
   */
  export type FavoriteCurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteCurrency to fetch.
     */
    where: FavoriteCurrencyWhereUniqueInput
  }

  /**
   * FavoriteCurrency findUniqueOrThrow
   */
  export type FavoriteCurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteCurrency to fetch.
     */
    where: FavoriteCurrencyWhereUniqueInput
  }

  /**
   * FavoriteCurrency findFirst
   */
  export type FavoriteCurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteCurrency to fetch.
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCurrencies to fetch.
     */
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteCurrencies.
     */
    cursor?: FavoriteCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteCurrencies.
     */
    distinct?: FavoriteCurrencyScalarFieldEnum | FavoriteCurrencyScalarFieldEnum[]
  }

  /**
   * FavoriteCurrency findFirstOrThrow
   */
  export type FavoriteCurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteCurrency to fetch.
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCurrencies to fetch.
     */
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteCurrencies.
     */
    cursor?: FavoriteCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteCurrencies.
     */
    distinct?: FavoriteCurrencyScalarFieldEnum | FavoriteCurrencyScalarFieldEnum[]
  }

  /**
   * FavoriteCurrency findMany
   */
  export type FavoriteCurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteCurrencies to fetch.
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCurrencies to fetch.
     */
    orderBy?: FavoriteCurrencyOrderByWithRelationInput | FavoriteCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteCurrencies.
     */
    cursor?: FavoriteCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCurrencies.
     */
    skip?: number
    distinct?: FavoriteCurrencyScalarFieldEnum | FavoriteCurrencyScalarFieldEnum[]
  }

  /**
   * FavoriteCurrency create
   */
  export type FavoriteCurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteCurrency.
     */
    data: XOR<FavoriteCurrencyCreateInput, FavoriteCurrencyUncheckedCreateInput>
  }

  /**
   * FavoriteCurrency createMany
   */
  export type FavoriteCurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteCurrencies.
     */
    data: FavoriteCurrencyCreateManyInput | FavoriteCurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteCurrency createManyAndReturn
   */
  export type FavoriteCurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteCurrencies.
     */
    data: FavoriteCurrencyCreateManyInput | FavoriteCurrencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteCurrency update
   */
  export type FavoriteCurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteCurrency.
     */
    data: XOR<FavoriteCurrencyUpdateInput, FavoriteCurrencyUncheckedUpdateInput>
    /**
     * Choose, which FavoriteCurrency to update.
     */
    where: FavoriteCurrencyWhereUniqueInput
  }

  /**
   * FavoriteCurrency updateMany
   */
  export type FavoriteCurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteCurrencies.
     */
    data: XOR<FavoriteCurrencyUpdateManyMutationInput, FavoriteCurrencyUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteCurrencies to update
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * Limit how many FavoriteCurrencies to update.
     */
    limit?: number
  }

  /**
   * FavoriteCurrency updateManyAndReturn
   */
  export type FavoriteCurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteCurrencies.
     */
    data: XOR<FavoriteCurrencyUpdateManyMutationInput, FavoriteCurrencyUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteCurrencies to update
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * Limit how many FavoriteCurrencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteCurrency upsert
   */
  export type FavoriteCurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteCurrency to update in case it exists.
     */
    where: FavoriteCurrencyWhereUniqueInput
    /**
     * In case the FavoriteCurrency found by the `where` argument doesn't exist, create a new FavoriteCurrency with this data.
     */
    create: XOR<FavoriteCurrencyCreateInput, FavoriteCurrencyUncheckedCreateInput>
    /**
     * In case the FavoriteCurrency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteCurrencyUpdateInput, FavoriteCurrencyUncheckedUpdateInput>
  }

  /**
   * FavoriteCurrency delete
   */
  export type FavoriteCurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
    /**
     * Filter which FavoriteCurrency to delete.
     */
    where: FavoriteCurrencyWhereUniqueInput
  }

  /**
   * FavoriteCurrency deleteMany
   */
  export type FavoriteCurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteCurrencies to delete
     */
    where?: FavoriteCurrencyWhereInput
    /**
     * Limit how many FavoriteCurrencies to delete.
     */
    limit?: number
  }

  /**
   * FavoriteCurrency without action
   */
  export type FavoriteCurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCurrency
     */
    select?: FavoriteCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteCurrency
     */
    omit?: FavoriteCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteCurrencyInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeRate
   */

  export type AggregateExchangeRate = {
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  export type ExchangeRateAvgAggregateOutputType = {
    rate: number | null
  }

  export type ExchangeRateSumAggregateOutputType = {
    rate: number | null
  }

  export type ExchangeRateMinAggregateOutputType = {
    id: string | null
    fromCurrencyId: string | null
    toCurrencyId: string | null
    rate: number | null
    source: $Enums.RateSource | null
    timestamp: Date | null
  }

  export type ExchangeRateMaxAggregateOutputType = {
    id: string | null
    fromCurrencyId: string | null
    toCurrencyId: string | null
    rate: number | null
    source: $Enums.RateSource | null
    timestamp: Date | null
  }

  export type ExchangeRateCountAggregateOutputType = {
    id: number
    fromCurrencyId: number
    toCurrencyId: number
    rate: number
    source: number
    timestamp: number
    _all: number
  }


  export type ExchangeRateAvgAggregateInputType = {
    rate?: true
  }

  export type ExchangeRateSumAggregateInputType = {
    rate?: true
  }

  export type ExchangeRateMinAggregateInputType = {
    id?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    rate?: true
    source?: true
    timestamp?: true
  }

  export type ExchangeRateMaxAggregateInputType = {
    id?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    rate?: true
    source?: true
    timestamp?: true
  }

  export type ExchangeRateCountAggregateInputType = {
    id?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    rate?: true
    source?: true
    timestamp?: true
    _all?: true
  }

  export type ExchangeRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRate to aggregate.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeRates
    **/
    _count?: true | ExchangeRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type GetExchangeRateAggregateType<T extends ExchangeRateAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRate[P]>
      : GetScalarType<T[P], AggregateExchangeRate[P]>
  }




  export type ExchangeRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithAggregationInput | ExchangeRateOrderByWithAggregationInput[]
    by: ExchangeRateScalarFieldEnum[] | ExchangeRateScalarFieldEnum
    having?: ExchangeRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeRateCountAggregateInputType | true
    _avg?: ExchangeRateAvgAggregateInputType
    _sum?: ExchangeRateSumAggregateInputType
    _min?: ExchangeRateMinAggregateInputType
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type ExchangeRateGroupByOutputType = {
    id: string
    fromCurrencyId: string
    toCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp: Date
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  type GetExchangeRateGroupByPayload<T extends ExchangeRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    rate?: boolean
    source?: boolean
    timestamp?: boolean
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    rate?: boolean
    source?: boolean
    timestamp?: boolean
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    rate?: boolean
    source?: boolean
    timestamp?: boolean
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectScalar = {
    id?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    rate?: boolean
    source?: boolean
    timestamp?: boolean
  }

  export type ExchangeRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromCurrencyId" | "toCurrencyId" | "rate" | "source" | "timestamp", ExtArgs["result"]["exchangeRate"]>
  export type ExchangeRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ExchangeRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ExchangeRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $ExchangeRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeRate"
    objects: {
      fromCurrency: Prisma.$CurrencyPayload<ExtArgs>
      toCurrency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromCurrencyId: string
      toCurrencyId: string
      rate: number
      source: $Enums.RateSource
      timestamp: Date
    }, ExtArgs["result"]["exchangeRate"]>
    composites: {}
  }

  type ExchangeRateGetPayload<S extends boolean | null | undefined | ExchangeRateDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRatePayload, S>

  type ExchangeRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeRateCountAggregateInputType | true
    }

  export interface ExchangeRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRate'], meta: { name: 'ExchangeRate' } }
    /**
     * Find zero or one ExchangeRate that matches the filter.
     * @param {ExchangeRateFindUniqueArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeRateFindUniqueArgs>(args: SelectSubset<T, ExchangeRateFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeRateFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeRateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeRateFindFirstArgs>(args?: SelectSubset<T, ExchangeRateFindFirstArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeRateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany()
     * 
     * // Get first 10 ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeRateFindManyArgs>(args?: SelectSubset<T, ExchangeRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeRate.
     * @param {ExchangeRateCreateArgs} args - Arguments to create a ExchangeRate.
     * @example
     * // Create one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.create({
     *   data: {
     *     // ... data to create a ExchangeRate
     *   }
     * })
     * 
     */
    create<T extends ExchangeRateCreateArgs>(args: SelectSubset<T, ExchangeRateCreateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeRates.
     * @param {ExchangeRateCreateManyArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeRateCreateManyArgs>(args?: SelectSubset<T, ExchangeRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeRates and returns the data saved in the database.
     * @param {ExchangeRateCreateManyAndReturnArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeRateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeRate.
     * @param {ExchangeRateDeleteArgs} args - Arguments to delete one ExchangeRate.
     * @example
     * // Delete one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.delete({
     *   where: {
     *     // ... filter to delete one ExchangeRate
     *   }
     * })
     * 
     */
    delete<T extends ExchangeRateDeleteArgs>(args: SelectSubset<T, ExchangeRateDeleteArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeRate.
     * @param {ExchangeRateUpdateArgs} args - Arguments to update one ExchangeRate.
     * @example
     * // Update one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeRateUpdateArgs>(args: SelectSubset<T, ExchangeRateUpdateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeRates.
     * @param {ExchangeRateDeleteManyArgs} args - Arguments to filter ExchangeRates to delete.
     * @example
     * // Delete a few ExchangeRates
     * const { count } = await prisma.exchangeRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeRateDeleteManyArgs>(args?: SelectSubset<T, ExchangeRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeRateUpdateManyArgs>(args: SelectSubset<T, ExchangeRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates and returns the data updated in the database.
     * @param {ExchangeRateUpdateManyAndReturnArgs} args - Arguments to update many ExchangeRates.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExchangeRateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeRate.
     * @param {ExchangeRateUpsertArgs} args - Arguments to update or create a ExchangeRate.
     * @example
     * // Update or create a ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.upsert({
     *   create: {
     *     // ... data to create a ExchangeRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeRate we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeRateUpsertArgs>(args: SelectSubset<T, ExchangeRateUpsertArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCountArgs} args - Arguments to filter ExchangeRates to count.
     * @example
     * // Count the number of ExchangeRates
     * const count = await prisma.exchangeRate.count({
     *   where: {
     *     // ... the filter for the ExchangeRates we want to count
     *   }
     * })
    **/
    count<T extends ExchangeRateCountArgs>(
      args?: Subset<T, ExchangeRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeRateAggregateArgs>(args: Subset<T, ExchangeRateAggregateArgs>): Prisma.PrismaPromise<GetExchangeRateAggregateType<T>>

    /**
     * Group by ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateGroupByArgs} args - Group by arguments.
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
      T extends ExchangeRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRateGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExchangeRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeRate model
   */
  readonly fields: ExchangeRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromCurrency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toCurrency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExchangeRate model
   */
  interface ExchangeRateFieldRefs {
    readonly id: FieldRef<"ExchangeRate", 'String'>
    readonly fromCurrencyId: FieldRef<"ExchangeRate", 'String'>
    readonly toCurrencyId: FieldRef<"ExchangeRate", 'String'>
    readonly rate: FieldRef<"ExchangeRate", 'Float'>
    readonly source: FieldRef<"ExchangeRate", 'RateSource'>
    readonly timestamp: FieldRef<"ExchangeRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeRate findUnique
   */
  export type ExchangeRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findUniqueOrThrow
   */
  export type ExchangeRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findFirst
   */
  export type ExchangeRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findFirstOrThrow
   */
  export type ExchangeRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findMany
   */
  export type ExchangeRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate create
   */
  export type ExchangeRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The data needed to create a ExchangeRate.
     */
    data: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
  }

  /**
   * ExchangeRate createMany
   */
  export type ExchangeRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRate createManyAndReturn
   */
  export type ExchangeRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeRate update
   */
  export type ExchangeRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The data needed to update a ExchangeRate.
     */
    data: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
    /**
     * Choose, which ExchangeRate to update.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate updateMany
   */
  export type ExchangeRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRate updateManyAndReturn
   */
  export type ExchangeRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeRate upsert
   */
  export type ExchangeRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The filter to search for the ExchangeRate to update in case it exists.
     */
    where: ExchangeRateWhereUniqueInput
    /**
     * In case the ExchangeRate found by the `where` argument doesn't exist, create a new ExchangeRate with this data.
     */
    create: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
    /**
     * In case the ExchangeRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
  }

  /**
   * ExchangeRate delete
   */
  export type ExchangeRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter which ExchangeRate to delete.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate deleteMany
   */
  export type ExchangeRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRates to delete
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to delete.
     */
    limit?: number
  }

  /**
   * ExchangeRate without action
   */
  export type ExchangeRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
  }


  /**
   * Model ConversionHistory
   */

  export type AggregateConversionHistory = {
    _count: ConversionHistoryCountAggregateOutputType | null
    _avg: ConversionHistoryAvgAggregateOutputType | null
    _sum: ConversionHistorySumAggregateOutputType | null
    _min: ConversionHistoryMinAggregateOutputType | null
    _max: ConversionHistoryMaxAggregateOutputType | null
  }

  export type ConversionHistoryAvgAggregateOutputType = {
    amount: number | null
    result: number | null
    rateUsed: number | null
  }

  export type ConversionHistorySumAggregateOutputType = {
    amount: number | null
    result: number | null
    rateUsed: number | null
  }

  export type ConversionHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fromCurrencyId: string | null
    toCurrencyId: string | null
    amount: number | null
    result: number | null
    rateUsed: number | null
    source: $Enums.RateSource | null
    createdAt: Date | null
  }

  export type ConversionHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fromCurrencyId: string | null
    toCurrencyId: string | null
    amount: number | null
    result: number | null
    rateUsed: number | null
    source: $Enums.RateSource | null
    createdAt: Date | null
  }

  export type ConversionHistoryCountAggregateOutputType = {
    id: number
    userId: number
    fromCurrencyId: number
    toCurrencyId: number
    amount: number
    result: number
    rateUsed: number
    source: number
    createdAt: number
    _all: number
  }


  export type ConversionHistoryAvgAggregateInputType = {
    amount?: true
    result?: true
    rateUsed?: true
  }

  export type ConversionHistorySumAggregateInputType = {
    amount?: true
    result?: true
    rateUsed?: true
  }

  export type ConversionHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    amount?: true
    result?: true
    rateUsed?: true
    source?: true
    createdAt?: true
  }

  export type ConversionHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    amount?: true
    result?: true
    rateUsed?: true
    source?: true
    createdAt?: true
  }

  export type ConversionHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    fromCurrencyId?: true
    toCurrencyId?: true
    amount?: true
    result?: true
    rateUsed?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type ConversionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionHistory to aggregate.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversionHistories
    **/
    _count?: true | ConversionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversionHistoryMaxAggregateInputType
  }

  export type GetConversionHistoryAggregateType<T extends ConversionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateConversionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversionHistory[P]>
      : GetScalarType<T[P], AggregateConversionHistory[P]>
  }




  export type ConversionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionHistoryWhereInput
    orderBy?: ConversionHistoryOrderByWithAggregationInput | ConversionHistoryOrderByWithAggregationInput[]
    by: ConversionHistoryScalarFieldEnum[] | ConversionHistoryScalarFieldEnum
    having?: ConversionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversionHistoryCountAggregateInputType | true
    _avg?: ConversionHistoryAvgAggregateInputType
    _sum?: ConversionHistorySumAggregateInputType
    _min?: ConversionHistoryMinAggregateInputType
    _max?: ConversionHistoryMaxAggregateInputType
  }

  export type ConversionHistoryGroupByOutputType = {
    id: string
    userId: string
    fromCurrencyId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt: Date
    _count: ConversionHistoryCountAggregateOutputType | null
    _avg: ConversionHistoryAvgAggregateOutputType | null
    _sum: ConversionHistorySumAggregateOutputType | null
    _min: ConversionHistoryMinAggregateOutputType | null
    _max: ConversionHistoryMaxAggregateOutputType | null
  }

  type GetConversionHistoryGroupByPayload<T extends ConversionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ConversionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ConversionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    amount?: boolean
    result?: boolean
    rateUsed?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    amount?: boolean
    result?: boolean
    rateUsed?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    amount?: boolean
    result?: boolean
    rateUsed?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    fromCurrencyId?: boolean
    toCurrencyId?: boolean
    amount?: boolean
    result?: boolean
    rateUsed?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type ConversionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fromCurrencyId" | "toCurrencyId" | "amount" | "result" | "rateUsed" | "source" | "createdAt", ExtArgs["result"]["conversionHistory"]>
  export type ConversionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ConversionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ConversionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
    toCurrency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $ConversionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fromCurrency: Prisma.$CurrencyPayload<ExtArgs>
      toCurrency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fromCurrencyId: string
      toCurrencyId: string
      amount: number
      result: number
      rateUsed: number
      source: $Enums.RateSource
      createdAt: Date
    }, ExtArgs["result"]["conversionHistory"]>
    composites: {}
  }

  type ConversionHistoryGetPayload<S extends boolean | null | undefined | ConversionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ConversionHistoryPayload, S>

  type ConversionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversionHistoryCountAggregateInputType | true
    }

  export interface ConversionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversionHistory'], meta: { name: 'ConversionHistory' } }
    /**
     * Find zero or one ConversionHistory that matches the filter.
     * @param {ConversionHistoryFindUniqueArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionHistoryFindUniqueArgs>(args: SelectSubset<T, ConversionHistoryFindUniqueArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindFirstArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionHistoryFindFirstArgs>(args?: SelectSubset<T, ConversionHistoryFindFirstArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindFirstOrThrowArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversionHistories
     * const conversionHistories = await prisma.conversionHistory.findMany()
     * 
     * // Get first 10 ConversionHistories
     * const conversionHistories = await prisma.conversionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversionHistoryFindManyArgs>(args?: SelectSubset<T, ConversionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversionHistory.
     * @param {ConversionHistoryCreateArgs} args - Arguments to create a ConversionHistory.
     * @example
     * // Create one ConversionHistory
     * const ConversionHistory = await prisma.conversionHistory.create({
     *   data: {
     *     // ... data to create a ConversionHistory
     *   }
     * })
     * 
     */
    create<T extends ConversionHistoryCreateArgs>(args: SelectSubset<T, ConversionHistoryCreateArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversionHistories.
     * @param {ConversionHistoryCreateManyArgs} args - Arguments to create many ConversionHistories.
     * @example
     * // Create many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversionHistoryCreateManyArgs>(args?: SelectSubset<T, ConversionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversionHistories and returns the data saved in the database.
     * @param {ConversionHistoryCreateManyAndReturnArgs} args - Arguments to create many ConversionHistories.
     * @example
     * // Create many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversionHistories and only return the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversionHistory.
     * @param {ConversionHistoryDeleteArgs} args - Arguments to delete one ConversionHistory.
     * @example
     * // Delete one ConversionHistory
     * const ConversionHistory = await prisma.conversionHistory.delete({
     *   where: {
     *     // ... filter to delete one ConversionHistory
     *   }
     * })
     * 
     */
    delete<T extends ConversionHistoryDeleteArgs>(args: SelectSubset<T, ConversionHistoryDeleteArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversionHistory.
     * @param {ConversionHistoryUpdateArgs} args - Arguments to update one ConversionHistory.
     * @example
     * // Update one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversionHistoryUpdateArgs>(args: SelectSubset<T, ConversionHistoryUpdateArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversionHistories.
     * @param {ConversionHistoryDeleteManyArgs} args - Arguments to filter ConversionHistories to delete.
     * @example
     * // Delete a few ConversionHistories
     * const { count } = await prisma.conversionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversionHistoryDeleteManyArgs>(args?: SelectSubset<T, ConversionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversionHistoryUpdateManyArgs>(args: SelectSubset<T, ConversionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionHistories and returns the data updated in the database.
     * @param {ConversionHistoryUpdateManyAndReturnArgs} args - Arguments to update many ConversionHistories.
     * @example
     * // Update many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversionHistories and only return the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversionHistory.
     * @param {ConversionHistoryUpsertArgs} args - Arguments to update or create a ConversionHistory.
     * @example
     * // Update or create a ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.upsert({
     *   create: {
     *     // ... data to create a ConversionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversionHistory we want to update
     *   }
     * })
     */
    upsert<T extends ConversionHistoryUpsertArgs>(args: SelectSubset<T, ConversionHistoryUpsertArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryCountArgs} args - Arguments to filter ConversionHistories to count.
     * @example
     * // Count the number of ConversionHistories
     * const count = await prisma.conversionHistory.count({
     *   where: {
     *     // ... the filter for the ConversionHistories we want to count
     *   }
     * })
    **/
    count<T extends ConversionHistoryCountArgs>(
      args?: Subset<T, ConversionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionHistoryAggregateArgs>(args: Subset<T, ConversionHistoryAggregateArgs>): Prisma.PrismaPromise<GetConversionHistoryAggregateType<T>>

    /**
     * Group by ConversionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryGroupByArgs} args - Group by arguments.
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
      T extends ConversionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ConversionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ConversionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversionHistory model
   */
  readonly fields: ConversionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromCurrency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toCurrency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversionHistory model
   */
  interface ConversionHistoryFieldRefs {
    readonly id: FieldRef<"ConversionHistory", 'String'>
    readonly userId: FieldRef<"ConversionHistory", 'String'>
    readonly fromCurrencyId: FieldRef<"ConversionHistory", 'String'>
    readonly toCurrencyId: FieldRef<"ConversionHistory", 'String'>
    readonly amount: FieldRef<"ConversionHistory", 'Float'>
    readonly result: FieldRef<"ConversionHistory", 'Float'>
    readonly rateUsed: FieldRef<"ConversionHistory", 'Float'>
    readonly source: FieldRef<"ConversionHistory", 'RateSource'>
    readonly createdAt: FieldRef<"ConversionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversionHistory findUnique
   */
  export type ConversionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory findUniqueOrThrow
   */
  export type ConversionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory findFirst
   */
  export type ConversionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionHistories.
     */
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory findFirstOrThrow
   */
  export type ConversionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionHistories.
     */
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory findMany
   */
  export type ConversionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistories to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory create
   */
  export type ConversionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversionHistory.
     */
    data: XOR<ConversionHistoryCreateInput, ConversionHistoryUncheckedCreateInput>
  }

  /**
   * ConversionHistory createMany
   */
  export type ConversionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversionHistories.
     */
    data: ConversionHistoryCreateManyInput | ConversionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversionHistory createManyAndReturn
   */
  export type ConversionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ConversionHistories.
     */
    data: ConversionHistoryCreateManyInput | ConversionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionHistory update
   */
  export type ConversionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversionHistory.
     */
    data: XOR<ConversionHistoryUpdateInput, ConversionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ConversionHistory to update.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory updateMany
   */
  export type ConversionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversionHistories.
     */
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversionHistories to update
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to update.
     */
    limit?: number
  }

  /**
   * ConversionHistory updateManyAndReturn
   */
  export type ConversionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ConversionHistories.
     */
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversionHistories to update
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionHistory upsert
   */
  export type ConversionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversionHistory to update in case it exists.
     */
    where: ConversionHistoryWhereUniqueInput
    /**
     * In case the ConversionHistory found by the `where` argument doesn't exist, create a new ConversionHistory with this data.
     */
    create: XOR<ConversionHistoryCreateInput, ConversionHistoryUncheckedCreateInput>
    /**
     * In case the ConversionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversionHistoryUpdateInput, ConversionHistoryUncheckedUpdateInput>
  }

  /**
   * ConversionHistory delete
   */
  export type ConversionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ConversionHistory to delete.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory deleteMany
   */
  export type ConversionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionHistories to delete
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to delete.
     */
    limit?: number
  }

  /**
   * ConversionHistory without action
   */
  export type ConversionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    symbol: 'symbol',
    type: 'type',
    rate: 'rate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const FavoriteCurrencyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currencyId: 'currencyId',
    createdAt: 'createdAt'
  };

  export type FavoriteCurrencyScalarFieldEnum = (typeof FavoriteCurrencyScalarFieldEnum)[keyof typeof FavoriteCurrencyScalarFieldEnum]


  export const ExchangeRateScalarFieldEnum: {
    id: 'id',
    fromCurrencyId: 'fromCurrencyId',
    toCurrencyId: 'toCurrencyId',
    rate: 'rate',
    source: 'source',
    timestamp: 'timestamp'
  };

  export type ExchangeRateScalarFieldEnum = (typeof ExchangeRateScalarFieldEnum)[keyof typeof ExchangeRateScalarFieldEnum]


  export const ConversionHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fromCurrencyId: 'fromCurrencyId',
    toCurrencyId: 'toCurrencyId',
    amount: 'amount',
    result: 'result',
    rateUsed: 'rateUsed',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type ConversionHistoryScalarFieldEnum = (typeof ConversionHistoryScalarFieldEnum)[keyof typeof ConversionHistoryScalarFieldEnum]


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
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CurrencyType'
   */
  export type EnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType'>
    


  /**
   * Reference to a field of type 'CurrencyType[]'
   */
  export type ListEnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RateSource'
   */
  export type EnumRateSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RateSource'>
    


  /**
   * Reference to a field of type 'RateSource[]'
   */
  export type ListEnumRateSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RateSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteCurrencies?: FavoriteCurrencyListRelationFilter
    conversions?: ConversionHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favoriteCurrencies?: FavoriteCurrencyOrderByRelationAggregateInput
    conversions?: ConversionHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteCurrencies?: FavoriteCurrencyListRelationFilter
    conversions?: ConversionHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    code?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    type?: EnumCurrencyTypeFilter<"Currency"> | $Enums.CurrencyType
    rate?: FloatFilter<"Currency"> | number
    createdAt?: DateTimeFilter<"Currency"> | Date | string
    updatedAt?: DateTimeFilter<"Currency"> | Date | string
    favoriteCurrencies?: FavoriteCurrencyListRelationFilter
    ratesFrom?: ExchangeRateListRelationFilter
    ratesTo?: ExchangeRateListRelationFilter
    conversionsFrom?: ConversionHistoryListRelationFilter
    conversionsTo?: ConversionHistoryListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    rate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favoriteCurrencies?: FavoriteCurrencyOrderByRelationAggregateInput
    ratesFrom?: ExchangeRateOrderByRelationAggregateInput
    ratesTo?: ExchangeRateOrderByRelationAggregateInput
    conversionsFrom?: ConversionHistoryOrderByRelationAggregateInput
    conversionsTo?: ConversionHistoryOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    type?: EnumCurrencyTypeFilter<"Currency"> | $Enums.CurrencyType
    rate?: FloatFilter<"Currency"> | number
    createdAt?: DateTimeFilter<"Currency"> | Date | string
    updatedAt?: DateTimeFilter<"Currency"> | Date | string
    favoriteCurrencies?: FavoriteCurrencyListRelationFilter
    ratesFrom?: ExchangeRateListRelationFilter
    ratesTo?: ExchangeRateListRelationFilter
    conversionsFrom?: ConversionHistoryListRelationFilter
    conversionsTo?: ConversionHistoryListRelationFilter
  }, "id" | "code">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    rate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Currency"> | string
    name?: StringWithAggregatesFilter<"Currency"> | string
    code?: StringWithAggregatesFilter<"Currency"> | string
    symbol?: StringWithAggregatesFilter<"Currency"> | string
    type?: EnumCurrencyTypeWithAggregatesFilter<"Currency"> | $Enums.CurrencyType
    rate?: FloatWithAggregatesFilter<"Currency"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Currency"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Currency"> | Date | string
  }

  export type FavoriteCurrencyWhereInput = {
    AND?: FavoriteCurrencyWhereInput | FavoriteCurrencyWhereInput[]
    OR?: FavoriteCurrencyWhereInput[]
    NOT?: FavoriteCurrencyWhereInput | FavoriteCurrencyWhereInput[]
    id?: StringFilter<"FavoriteCurrency"> | string
    userId?: StringFilter<"FavoriteCurrency"> | string
    currencyId?: StringFilter<"FavoriteCurrency"> | string
    createdAt?: DateTimeFilter<"FavoriteCurrency"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }

  export type FavoriteCurrencyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
  }

  export type FavoriteCurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_currencyId?: FavoriteCurrencyUserIdCurrencyIdCompoundUniqueInput
    AND?: FavoriteCurrencyWhereInput | FavoriteCurrencyWhereInput[]
    OR?: FavoriteCurrencyWhereInput[]
    NOT?: FavoriteCurrencyWhereInput | FavoriteCurrencyWhereInput[]
    userId?: StringFilter<"FavoriteCurrency"> | string
    currencyId?: StringFilter<"FavoriteCurrency"> | string
    createdAt?: DateTimeFilter<"FavoriteCurrency"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }, "id" | "userId_currencyId">

  export type FavoriteCurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCurrencyCountOrderByAggregateInput
    _max?: FavoriteCurrencyMaxOrderByAggregateInput
    _min?: FavoriteCurrencyMinOrderByAggregateInput
  }

  export type FavoriteCurrencyScalarWhereWithAggregatesInput = {
    AND?: FavoriteCurrencyScalarWhereWithAggregatesInput | FavoriteCurrencyScalarWhereWithAggregatesInput[]
    OR?: FavoriteCurrencyScalarWhereWithAggregatesInput[]
    NOT?: FavoriteCurrencyScalarWhereWithAggregatesInput | FavoriteCurrencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteCurrency"> | string
    userId?: StringWithAggregatesFilter<"FavoriteCurrency"> | string
    currencyId?: StringWithAggregatesFilter<"FavoriteCurrency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteCurrency"> | Date | string
  }

  export type ExchangeRateWhereInput = {
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    id?: StringFilter<"ExchangeRate"> | string
    fromCurrencyId?: StringFilter<"ExchangeRate"> | string
    toCurrencyId?: StringFilter<"ExchangeRate"> | string
    rate?: FloatFilter<"ExchangeRate"> | number
    source?: EnumRateSourceFilter<"ExchangeRate"> | $Enums.RateSource
    timestamp?: DateTimeFilter<"ExchangeRate"> | Date | string
    fromCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    toCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }

  export type ExchangeRateOrderByWithRelationInput = {
    id?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    rate?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
    fromCurrency?: CurrencyOrderByWithRelationInput
    toCurrency?: CurrencyOrderByWithRelationInput
  }

  export type ExchangeRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fromCurrencyId_toCurrencyId_source_timestamp?: ExchangeRateFromCurrencyIdToCurrencyIdSourceTimestampCompoundUniqueInput
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    fromCurrencyId?: StringFilter<"ExchangeRate"> | string
    toCurrencyId?: StringFilter<"ExchangeRate"> | string
    rate?: FloatFilter<"ExchangeRate"> | number
    source?: EnumRateSourceFilter<"ExchangeRate"> | $Enums.RateSource
    timestamp?: DateTimeFilter<"ExchangeRate"> | Date | string
    fromCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    toCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }, "id" | "fromCurrencyId_toCurrencyId_source_timestamp">

  export type ExchangeRateOrderByWithAggregationInput = {
    id?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    rate?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
    _count?: ExchangeRateCountOrderByAggregateInput
    _avg?: ExchangeRateAvgOrderByAggregateInput
    _max?: ExchangeRateMaxOrderByAggregateInput
    _min?: ExchangeRateMinOrderByAggregateInput
    _sum?: ExchangeRateSumOrderByAggregateInput
  }

  export type ExchangeRateScalarWhereWithAggregatesInput = {
    AND?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    OR?: ExchangeRateScalarWhereWithAggregatesInput[]
    NOT?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExchangeRate"> | string
    fromCurrencyId?: StringWithAggregatesFilter<"ExchangeRate"> | string
    toCurrencyId?: StringWithAggregatesFilter<"ExchangeRate"> | string
    rate?: FloatWithAggregatesFilter<"ExchangeRate"> | number
    source?: EnumRateSourceWithAggregatesFilter<"ExchangeRate"> | $Enums.RateSource
    timestamp?: DateTimeWithAggregatesFilter<"ExchangeRate"> | Date | string
  }

  export type ConversionHistoryWhereInput = {
    AND?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    OR?: ConversionHistoryWhereInput[]
    NOT?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    id?: StringFilter<"ConversionHistory"> | string
    userId?: StringFilter<"ConversionHistory"> | string
    fromCurrencyId?: StringFilter<"ConversionHistory"> | string
    toCurrencyId?: StringFilter<"ConversionHistory"> | string
    amount?: FloatFilter<"ConversionHistory"> | number
    result?: FloatFilter<"ConversionHistory"> | number
    rateUsed?: FloatFilter<"ConversionHistory"> | number
    source?: EnumRateSourceFilter<"ConversionHistory"> | $Enums.RateSource
    createdAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    toCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }

  export type ConversionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    fromCurrency?: CurrencyOrderByWithRelationInput
    toCurrency?: CurrencyOrderByWithRelationInput
  }

  export type ConversionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    OR?: ConversionHistoryWhereInput[]
    NOT?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    userId?: StringFilter<"ConversionHistory"> | string
    fromCurrencyId?: StringFilter<"ConversionHistory"> | string
    toCurrencyId?: StringFilter<"ConversionHistory"> | string
    amount?: FloatFilter<"ConversionHistory"> | number
    result?: FloatFilter<"ConversionHistory"> | number
    rateUsed?: FloatFilter<"ConversionHistory"> | number
    source?: EnumRateSourceFilter<"ConversionHistory"> | $Enums.RateSource
    createdAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    toCurrency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }, "id">

  export type ConversionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: ConversionHistoryCountOrderByAggregateInput
    _avg?: ConversionHistoryAvgOrderByAggregateInput
    _max?: ConversionHistoryMaxOrderByAggregateInput
    _min?: ConversionHistoryMinOrderByAggregateInput
    _sum?: ConversionHistorySumOrderByAggregateInput
  }

  export type ConversionHistoryScalarWhereWithAggregatesInput = {
    AND?: ConversionHistoryScalarWhereWithAggregatesInput | ConversionHistoryScalarWhereWithAggregatesInput[]
    OR?: ConversionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ConversionHistoryScalarWhereWithAggregatesInput | ConversionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversionHistory"> | string
    userId?: StringWithAggregatesFilter<"ConversionHistory"> | string
    fromCurrencyId?: StringWithAggregatesFilter<"ConversionHistory"> | string
    toCurrencyId?: StringWithAggregatesFilter<"ConversionHistory"> | string
    amount?: FloatWithAggregatesFilter<"ConversionHistory"> | number
    result?: FloatWithAggregatesFilter<"ConversionHistory"> | number
    rateUsed?: FloatWithAggregatesFilter<"ConversionHistory"> | number
    source?: EnumRateSourceWithAggregatesFilter<"ConversionHistory"> | $Enums.RateSource
    createdAt?: DateTimeWithAggregatesFilter<"ConversionHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutUserInput
    conversions?: ConversionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutUserInput
    conversions?: ConversionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutUserNestedInput
    conversions?: ConversionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutUserNestedInput
    conversions?: ConversionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyCreateInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurrencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteCurrenciesInput
    currency: CurrencyCreateNestedOneWithoutFavoriteCurrenciesInput
  }

  export type FavoriteCurrencyUncheckedCreateInput = {
    id?: string
    userId: string
    currencyId: string
    createdAt?: Date | string
  }

  export type FavoriteCurrencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput
  }

  export type FavoriteCurrencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyCreateManyInput = {
    id?: string
    userId: string
    currencyId: string
    createdAt?: Date | string
  }

  export type FavoriteCurrencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCreateInput = {
    id?: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
    fromCurrency: CurrencyCreateNestedOneWithoutRatesFromInput
    toCurrency: CurrencyCreateNestedOneWithoutRatesToInput
  }

  export type ExchangeRateUncheckedCreateInput = {
    id?: string
    fromCurrencyId: string
    toCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ExchangeRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromCurrency?: CurrencyUpdateOneRequiredWithoutRatesFromNestedInput
    toCurrency?: CurrencyUpdateOneRequiredWithoutRatesToNestedInput
  }

  export type ExchangeRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCreateManyInput = {
    id?: string
    fromCurrencyId: string
    toCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ExchangeRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryCreateInput = {
    id?: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversionsInput
    fromCurrency: CurrencyCreateNestedOneWithoutConversionsFromInput
    toCurrency: CurrencyCreateNestedOneWithoutConversionsToInput
  }

  export type ConversionHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    fromCurrencyId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversionsNestedInput
    fromCurrency?: CurrencyUpdateOneRequiredWithoutConversionsFromNestedInput
    toCurrency?: CurrencyUpdateOneRequiredWithoutConversionsToNestedInput
  }

  export type ConversionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryCreateManyInput = {
    id?: string
    userId: string
    fromCurrencyId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FavoriteCurrencyListRelationFilter = {
    every?: FavoriteCurrencyWhereInput
    some?: FavoriteCurrencyWhereInput
    none?: FavoriteCurrencyWhereInput
  }

  export type ConversionHistoryListRelationFilter = {
    every?: ConversionHistoryWhereInput
    some?: ConversionHistoryWhereInput
    none?: ConversionHistoryWhereInput
  }

  export type FavoriteCurrencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExchangeRateListRelationFilter = {
    every?: ExchangeRateWhereInput
    some?: ExchangeRateWhereInput
    none?: ExchangeRateWhereInput
  }

  export type ExchangeRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    rate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    rate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    rate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type EnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CurrencyScalarRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type FavoriteCurrencyUserIdCurrencyIdCompoundUniqueInput = {
    userId: string
    currencyId: string
  }

  export type FavoriteCurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteCurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteCurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currencyId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRateSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.RateSource | EnumRateSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRateSourceFilter<$PrismaModel> | $Enums.RateSource
  }

  export type ExchangeRateFromCurrencyIdToCurrencyIdSourceTimestampCompoundUniqueInput = {
    fromCurrencyId: string
    toCurrencyId: string
    source: $Enums.RateSource
    timestamp: Date | string
  }

  export type ExchangeRateCountOrderByAggregateInput = {
    id?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    rate?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type ExchangeRateAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type ExchangeRateMaxOrderByAggregateInput = {
    id?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    rate?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type ExchangeRateMinOrderByAggregateInput = {
    id?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    rate?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type ExchangeRateSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type EnumRateSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RateSource | EnumRateSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRateSourceWithAggregatesFilter<$PrismaModel> | $Enums.RateSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRateSourceFilter<$PrismaModel>
    _max?: NestedEnumRateSourceFilter<$PrismaModel>
  }

  export type ConversionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
  }

  export type ConversionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromCurrencyId?: SortOrder
    toCurrencyId?: SortOrder
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionHistorySumOrderByAggregateInput = {
    amount?: SortOrder
    result?: SortOrder
    rateUsed?: SortOrder
  }

  export type FavoriteCurrencyCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput> | FavoriteCurrencyCreateWithoutUserInput[] | FavoriteCurrencyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutUserInput | FavoriteCurrencyCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCurrencyCreateManyUserInputEnvelope
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
  }

  export type ConversionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput> | ConversionHistoryCreateWithoutUserInput[] | ConversionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput | ConversionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ConversionHistoryCreateManyUserInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type FavoriteCurrencyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput> | FavoriteCurrencyCreateWithoutUserInput[] | FavoriteCurrencyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutUserInput | FavoriteCurrencyCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCurrencyCreateManyUserInputEnvelope
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
  }

  export type ConversionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput> | ConversionHistoryCreateWithoutUserInput[] | ConversionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput | ConversionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ConversionHistoryCreateManyUserInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FavoriteCurrencyUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput> | FavoriteCurrencyCreateWithoutUserInput[] | FavoriteCurrencyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutUserInput | FavoriteCurrencyCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteCurrencyUpsertWithWhereUniqueWithoutUserInput | FavoriteCurrencyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCurrencyCreateManyUserInputEnvelope
    set?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    disconnect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    delete?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    update?: FavoriteCurrencyUpdateWithWhereUniqueWithoutUserInput | FavoriteCurrencyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteCurrencyUpdateManyWithWhereWithoutUserInput | FavoriteCurrencyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
  }

  export type ConversionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput> | ConversionHistoryCreateWithoutUserInput[] | ConversionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput | ConversionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutUserInput | ConversionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversionHistoryCreateManyUserInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutUserInput | ConversionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutUserInput | ConversionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type FavoriteCurrencyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput> | FavoriteCurrencyCreateWithoutUserInput[] | FavoriteCurrencyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutUserInput | FavoriteCurrencyCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteCurrencyUpsertWithWhereUniqueWithoutUserInput | FavoriteCurrencyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCurrencyCreateManyUserInputEnvelope
    set?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    disconnect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    delete?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    update?: FavoriteCurrencyUpdateWithWhereUniqueWithoutUserInput | FavoriteCurrencyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteCurrencyUpdateManyWithWhereWithoutUserInput | FavoriteCurrencyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput> | ConversionHistoryCreateWithoutUserInput[] | ConversionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput | ConversionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutUserInput | ConversionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversionHistoryCreateManyUserInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutUserInput | ConversionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutUserInput | ConversionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type FavoriteCurrencyCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput> | FavoriteCurrencyCreateWithoutCurrencyInput[] | FavoriteCurrencyUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutCurrencyInput | FavoriteCurrencyCreateOrConnectWithoutCurrencyInput[]
    createMany?: FavoriteCurrencyCreateManyCurrencyInputEnvelope
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
  }

  export type ExchangeRateCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput> | ExchangeRateCreateWithoutFromCurrencyInput[] | ExchangeRateUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutFromCurrencyInput | ExchangeRateCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: ExchangeRateCreateManyFromCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type ExchangeRateCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput> | ExchangeRateCreateWithoutToCurrencyInput[] | ExchangeRateUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutToCurrencyInput | ExchangeRateCreateOrConnectWithoutToCurrencyInput[]
    createMany?: ExchangeRateCreateManyToCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type ConversionHistoryCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput> | ConversionHistoryCreateWithoutFromCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutFromCurrencyInput | ConversionHistoryCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: ConversionHistoryCreateManyFromCurrencyInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type ConversionHistoryCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput> | ConversionHistoryCreateWithoutToCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutToCurrencyInput | ConversionHistoryCreateOrConnectWithoutToCurrencyInput[]
    createMany?: ConversionHistoryCreateManyToCurrencyInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput> | FavoriteCurrencyCreateWithoutCurrencyInput[] | FavoriteCurrencyUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutCurrencyInput | FavoriteCurrencyCreateOrConnectWithoutCurrencyInput[]
    createMany?: FavoriteCurrencyCreateManyCurrencyInputEnvelope
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
  }

  export type ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput> | ExchangeRateCreateWithoutFromCurrencyInput[] | ExchangeRateUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutFromCurrencyInput | ExchangeRateCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: ExchangeRateCreateManyFromCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput> | ExchangeRateCreateWithoutToCurrencyInput[] | ExchangeRateUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutToCurrencyInput | ExchangeRateCreateOrConnectWithoutToCurrencyInput[]
    createMany?: ExchangeRateCreateManyToCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput> | ConversionHistoryCreateWithoutFromCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutFromCurrencyInput | ConversionHistoryCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: ConversionHistoryCreateManyFromCurrencyInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput> | ConversionHistoryCreateWithoutToCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutToCurrencyInput | ConversionHistoryCreateOrConnectWithoutToCurrencyInput[]
    createMany?: ConversionHistoryCreateManyToCurrencyInputEnvelope
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
  }

  export type EnumCurrencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput> | FavoriteCurrencyCreateWithoutCurrencyInput[] | FavoriteCurrencyUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutCurrencyInput | FavoriteCurrencyCreateOrConnectWithoutCurrencyInput[]
    upsert?: FavoriteCurrencyUpsertWithWhereUniqueWithoutCurrencyInput | FavoriteCurrencyUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: FavoriteCurrencyCreateManyCurrencyInputEnvelope
    set?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    disconnect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    delete?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    update?: FavoriteCurrencyUpdateWithWhereUniqueWithoutCurrencyInput | FavoriteCurrencyUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: FavoriteCurrencyUpdateManyWithWhereWithoutCurrencyInput | FavoriteCurrencyUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
  }

  export type ExchangeRateUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput> | ExchangeRateCreateWithoutFromCurrencyInput[] | ExchangeRateUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutFromCurrencyInput | ExchangeRateCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutFromCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: ExchangeRateCreateManyFromCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutFromCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutFromCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type ExchangeRateUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput> | ExchangeRateCreateWithoutToCurrencyInput[] | ExchangeRateUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutToCurrencyInput | ExchangeRateCreateOrConnectWithoutToCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutToCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: ExchangeRateCreateManyToCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutToCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutToCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput> | ConversionHistoryCreateWithoutFromCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutFromCurrencyInput | ConversionHistoryCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutFromCurrencyInput | ConversionHistoryUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: ConversionHistoryCreateManyFromCurrencyInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutFromCurrencyInput | ConversionHistoryUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutFromCurrencyInput | ConversionHistoryUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type ConversionHistoryUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput> | ConversionHistoryCreateWithoutToCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutToCurrencyInput | ConversionHistoryCreateOrConnectWithoutToCurrencyInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutToCurrencyInput | ConversionHistoryUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: ConversionHistoryCreateManyToCurrencyInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutToCurrencyInput | ConversionHistoryUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutToCurrencyInput | ConversionHistoryUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput> | FavoriteCurrencyCreateWithoutCurrencyInput[] | FavoriteCurrencyUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FavoriteCurrencyCreateOrConnectWithoutCurrencyInput | FavoriteCurrencyCreateOrConnectWithoutCurrencyInput[]
    upsert?: FavoriteCurrencyUpsertWithWhereUniqueWithoutCurrencyInput | FavoriteCurrencyUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: FavoriteCurrencyCreateManyCurrencyInputEnvelope
    set?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    disconnect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    delete?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    connect?: FavoriteCurrencyWhereUniqueInput | FavoriteCurrencyWhereUniqueInput[]
    update?: FavoriteCurrencyUpdateWithWhereUniqueWithoutCurrencyInput | FavoriteCurrencyUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: FavoriteCurrencyUpdateManyWithWhereWithoutCurrencyInput | FavoriteCurrencyUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
  }

  export type ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput> | ExchangeRateCreateWithoutFromCurrencyInput[] | ExchangeRateUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutFromCurrencyInput | ExchangeRateCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutFromCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: ExchangeRateCreateManyFromCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutFromCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutFromCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput> | ExchangeRateCreateWithoutToCurrencyInput[] | ExchangeRateUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutToCurrencyInput | ExchangeRateCreateOrConnectWithoutToCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutToCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: ExchangeRateCreateManyToCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutToCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutToCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput> | ConversionHistoryCreateWithoutFromCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutFromCurrencyInput | ConversionHistoryCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutFromCurrencyInput | ConversionHistoryUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: ConversionHistoryCreateManyFromCurrencyInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutFromCurrencyInput | ConversionHistoryUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutFromCurrencyInput | ConversionHistoryUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput> | ConversionHistoryCreateWithoutToCurrencyInput[] | ConversionHistoryUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutToCurrencyInput | ConversionHistoryCreateOrConnectWithoutToCurrencyInput[]
    upsert?: ConversionHistoryUpsertWithWhereUniqueWithoutToCurrencyInput | ConversionHistoryUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: ConversionHistoryCreateManyToCurrencyInputEnvelope
    set?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    disconnect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    delete?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    connect?: ConversionHistoryWhereUniqueInput | ConversionHistoryWhereUniqueInput[]
    update?: ConversionHistoryUpdateWithWhereUniqueWithoutToCurrencyInput | ConversionHistoryUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: ConversionHistoryUpdateManyWithWhereWithoutToCurrencyInput | ConversionHistoryUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteCurrenciesInput = {
    create?: XOR<UserCreateWithoutFavoriteCurrenciesInput, UserUncheckedCreateWithoutFavoriteCurrenciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteCurrenciesInput
    connect?: UserWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutFavoriteCurrenciesInput = {
    create?: XOR<CurrencyCreateWithoutFavoriteCurrenciesInput, CurrencyUncheckedCreateWithoutFavoriteCurrenciesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutFavoriteCurrenciesInput
    connect?: CurrencyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteCurrenciesInput, UserUncheckedCreateWithoutFavoriteCurrenciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteCurrenciesInput
    upsert?: UserUpsertWithoutFavoriteCurrenciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteCurrenciesInput, UserUpdateWithoutFavoriteCurrenciesInput>, UserUncheckedUpdateWithoutFavoriteCurrenciesInput>
  }

  export type CurrencyUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput = {
    create?: XOR<CurrencyCreateWithoutFavoriteCurrenciesInput, CurrencyUncheckedCreateWithoutFavoriteCurrenciesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutFavoriteCurrenciesInput
    upsert?: CurrencyUpsertWithoutFavoriteCurrenciesInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutFavoriteCurrenciesInput, CurrencyUpdateWithoutFavoriteCurrenciesInput>, CurrencyUncheckedUpdateWithoutFavoriteCurrenciesInput>
  }

  export type CurrencyCreateNestedOneWithoutRatesFromInput = {
    create?: XOR<CurrencyCreateWithoutRatesFromInput, CurrencyUncheckedCreateWithoutRatesFromInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRatesFromInput
    connect?: CurrencyWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutRatesToInput = {
    create?: XOR<CurrencyCreateWithoutRatesToInput, CurrencyUncheckedCreateWithoutRatesToInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRatesToInput
    connect?: CurrencyWhereUniqueInput
  }

  export type EnumRateSourceFieldUpdateOperationsInput = {
    set?: $Enums.RateSource
  }

  export type CurrencyUpdateOneRequiredWithoutRatesFromNestedInput = {
    create?: XOR<CurrencyCreateWithoutRatesFromInput, CurrencyUncheckedCreateWithoutRatesFromInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRatesFromInput
    upsert?: CurrencyUpsertWithoutRatesFromInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutRatesFromInput, CurrencyUpdateWithoutRatesFromInput>, CurrencyUncheckedUpdateWithoutRatesFromInput>
  }

  export type CurrencyUpdateOneRequiredWithoutRatesToNestedInput = {
    create?: XOR<CurrencyCreateWithoutRatesToInput, CurrencyUncheckedCreateWithoutRatesToInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRatesToInput
    upsert?: CurrencyUpsertWithoutRatesToInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutRatesToInput, CurrencyUpdateWithoutRatesToInput>, CurrencyUncheckedUpdateWithoutRatesToInput>
  }

  export type UserCreateNestedOneWithoutConversionsInput = {
    create?: XOR<UserCreateWithoutConversionsInput, UserUncheckedCreateWithoutConversionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionsInput
    connect?: UserWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutConversionsFromInput = {
    create?: XOR<CurrencyCreateWithoutConversionsFromInput, CurrencyUncheckedCreateWithoutConversionsFromInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutConversionsFromInput
    connect?: CurrencyWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutConversionsToInput = {
    create?: XOR<CurrencyCreateWithoutConversionsToInput, CurrencyUncheckedCreateWithoutConversionsToInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutConversionsToInput
    connect?: CurrencyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConversionsNestedInput = {
    create?: XOR<UserCreateWithoutConversionsInput, UserUncheckedCreateWithoutConversionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionsInput
    upsert?: UserUpsertWithoutConversionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversionsInput, UserUpdateWithoutConversionsInput>, UserUncheckedUpdateWithoutConversionsInput>
  }

  export type CurrencyUpdateOneRequiredWithoutConversionsFromNestedInput = {
    create?: XOR<CurrencyCreateWithoutConversionsFromInput, CurrencyUncheckedCreateWithoutConversionsFromInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutConversionsFromInput
    upsert?: CurrencyUpsertWithoutConversionsFromInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutConversionsFromInput, CurrencyUpdateWithoutConversionsFromInput>, CurrencyUncheckedUpdateWithoutConversionsFromInput>
  }

  export type CurrencyUpdateOneRequiredWithoutConversionsToNestedInput = {
    create?: XOR<CurrencyCreateWithoutConversionsToInput, CurrencyUncheckedCreateWithoutConversionsToInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutConversionsToInput
    upsert?: CurrencyUpsertWithoutConversionsToInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutConversionsToInput, CurrencyUpdateWithoutConversionsToInput>, CurrencyUncheckedUpdateWithoutConversionsToInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRateSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.RateSource | EnumRateSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRateSourceFilter<$PrismaModel> | $Enums.RateSource
  }

  export type NestedEnumRateSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RateSource | EnumRateSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateSource[] | ListEnumRateSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRateSourceWithAggregatesFilter<$PrismaModel> | $Enums.RateSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRateSourceFilter<$PrismaModel>
    _max?: NestedEnumRateSourceFilter<$PrismaModel>
  }

  export type FavoriteCurrencyCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    currency: CurrencyCreateNestedOneWithoutFavoriteCurrenciesInput
  }

  export type FavoriteCurrencyUncheckedCreateWithoutUserInput = {
    id?: string
    currencyId: string
    createdAt?: Date | string
  }

  export type FavoriteCurrencyCreateOrConnectWithoutUserInput = {
    where: FavoriteCurrencyWhereUniqueInput
    create: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCurrencyCreateManyUserInputEnvelope = {
    data: FavoriteCurrencyCreateManyUserInput | FavoriteCurrencyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversionHistoryCreateWithoutUserInput = {
    id?: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
    fromCurrency: CurrencyCreateNestedOneWithoutConversionsFromInput
    toCurrency: CurrencyCreateNestedOneWithoutConversionsToInput
  }

  export type ConversionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    fromCurrencyId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryCreateOrConnectWithoutUserInput = {
    where: ConversionHistoryWhereUniqueInput
    create: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ConversionHistoryCreateManyUserInputEnvelope = {
    data: ConversionHistoryCreateManyUserInput | ConversionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCurrencyUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteCurrencyWhereUniqueInput
    update: XOR<FavoriteCurrencyUpdateWithoutUserInput, FavoriteCurrencyUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCurrencyCreateWithoutUserInput, FavoriteCurrencyUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCurrencyUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteCurrencyWhereUniqueInput
    data: XOR<FavoriteCurrencyUpdateWithoutUserInput, FavoriteCurrencyUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteCurrencyUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteCurrencyScalarWhereInput
    data: XOR<FavoriteCurrencyUpdateManyMutationInput, FavoriteCurrencyUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteCurrencyScalarWhereInput = {
    AND?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
    OR?: FavoriteCurrencyScalarWhereInput[]
    NOT?: FavoriteCurrencyScalarWhereInput | FavoriteCurrencyScalarWhereInput[]
    id?: StringFilter<"FavoriteCurrency"> | string
    userId?: StringFilter<"FavoriteCurrency"> | string
    currencyId?: StringFilter<"FavoriteCurrency"> | string
    createdAt?: DateTimeFilter<"FavoriteCurrency"> | Date | string
  }

  export type ConversionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversionHistoryWhereUniqueInput
    update: XOR<ConversionHistoryUpdateWithoutUserInput, ConversionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ConversionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversionHistoryWhereUniqueInput
    data: XOR<ConversionHistoryUpdateWithoutUserInput, ConversionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ConversionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ConversionHistoryScalarWhereInput
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversionHistoryScalarWhereInput = {
    AND?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
    OR?: ConversionHistoryScalarWhereInput[]
    NOT?: ConversionHistoryScalarWhereInput | ConversionHistoryScalarWhereInput[]
    id?: StringFilter<"ConversionHistory"> | string
    userId?: StringFilter<"ConversionHistory"> | string
    fromCurrencyId?: StringFilter<"ConversionHistory"> | string
    toCurrencyId?: StringFilter<"ConversionHistory"> | string
    amount?: FloatFilter<"ConversionHistory"> | number
    result?: FloatFilter<"ConversionHistory"> | number
    rateUsed?: FloatFilter<"ConversionHistory"> | number
    source?: EnumRateSourceFilter<"ConversionHistory"> | $Enums.RateSource
    createdAt?: DateTimeFilter<"ConversionHistory"> | Date | string
  }

  export type FavoriteCurrencyCreateWithoutCurrencyInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteCurrenciesInput
  }

  export type FavoriteCurrencyUncheckedCreateWithoutCurrencyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCurrencyCreateOrConnectWithoutCurrencyInput = {
    where: FavoriteCurrencyWhereUniqueInput
    create: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput>
  }

  export type FavoriteCurrencyCreateManyCurrencyInputEnvelope = {
    data: FavoriteCurrencyCreateManyCurrencyInput | FavoriteCurrencyCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeRateCreateWithoutFromCurrencyInput = {
    id?: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
    toCurrency: CurrencyCreateNestedOneWithoutRatesToInput
  }

  export type ExchangeRateUncheckedCreateWithoutFromCurrencyInput = {
    id?: string
    toCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ExchangeRateCreateOrConnectWithoutFromCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    create: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput>
  }

  export type ExchangeRateCreateManyFromCurrencyInputEnvelope = {
    data: ExchangeRateCreateManyFromCurrencyInput | ExchangeRateCreateManyFromCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeRateCreateWithoutToCurrencyInput = {
    id?: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
    fromCurrency: CurrencyCreateNestedOneWithoutRatesFromInput
  }

  export type ExchangeRateUncheckedCreateWithoutToCurrencyInput = {
    id?: string
    fromCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ExchangeRateCreateOrConnectWithoutToCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    create: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput>
  }

  export type ExchangeRateCreateManyToCurrencyInputEnvelope = {
    data: ExchangeRateCreateManyToCurrencyInput | ExchangeRateCreateManyToCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type ConversionHistoryCreateWithoutFromCurrencyInput = {
    id?: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversionsInput
    toCurrency: CurrencyCreateNestedOneWithoutConversionsToInput
  }

  export type ConversionHistoryUncheckedCreateWithoutFromCurrencyInput = {
    id?: string
    userId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryCreateOrConnectWithoutFromCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    create: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput>
  }

  export type ConversionHistoryCreateManyFromCurrencyInputEnvelope = {
    data: ConversionHistoryCreateManyFromCurrencyInput | ConversionHistoryCreateManyFromCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type ConversionHistoryCreateWithoutToCurrencyInput = {
    id?: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversionsInput
    fromCurrency: CurrencyCreateNestedOneWithoutConversionsFromInput
  }

  export type ConversionHistoryUncheckedCreateWithoutToCurrencyInput = {
    id?: string
    userId: string
    fromCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryCreateOrConnectWithoutToCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    create: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput>
  }

  export type ConversionHistoryCreateManyToCurrencyInputEnvelope = {
    data: ConversionHistoryCreateManyToCurrencyInput | ConversionHistoryCreateManyToCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCurrencyUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: FavoriteCurrencyWhereUniqueInput
    update: XOR<FavoriteCurrencyUpdateWithoutCurrencyInput, FavoriteCurrencyUncheckedUpdateWithoutCurrencyInput>
    create: XOR<FavoriteCurrencyCreateWithoutCurrencyInput, FavoriteCurrencyUncheckedCreateWithoutCurrencyInput>
  }

  export type FavoriteCurrencyUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: FavoriteCurrencyWhereUniqueInput
    data: XOR<FavoriteCurrencyUpdateWithoutCurrencyInput, FavoriteCurrencyUncheckedUpdateWithoutCurrencyInput>
  }

  export type FavoriteCurrencyUpdateManyWithWhereWithoutCurrencyInput = {
    where: FavoriteCurrencyScalarWhereInput
    data: XOR<FavoriteCurrencyUpdateManyMutationInput, FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type ExchangeRateUpsertWithWhereUniqueWithoutFromCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    update: XOR<ExchangeRateUpdateWithoutFromCurrencyInput, ExchangeRateUncheckedUpdateWithoutFromCurrencyInput>
    create: XOR<ExchangeRateCreateWithoutFromCurrencyInput, ExchangeRateUncheckedCreateWithoutFromCurrencyInput>
  }

  export type ExchangeRateUpdateWithWhereUniqueWithoutFromCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    data: XOR<ExchangeRateUpdateWithoutFromCurrencyInput, ExchangeRateUncheckedUpdateWithoutFromCurrencyInput>
  }

  export type ExchangeRateUpdateManyWithWhereWithoutFromCurrencyInput = {
    where: ExchangeRateScalarWhereInput
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyWithoutFromCurrencyInput>
  }

  export type ExchangeRateScalarWhereInput = {
    AND?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
    OR?: ExchangeRateScalarWhereInput[]
    NOT?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
    id?: StringFilter<"ExchangeRate"> | string
    fromCurrencyId?: StringFilter<"ExchangeRate"> | string
    toCurrencyId?: StringFilter<"ExchangeRate"> | string
    rate?: FloatFilter<"ExchangeRate"> | number
    source?: EnumRateSourceFilter<"ExchangeRate"> | $Enums.RateSource
    timestamp?: DateTimeFilter<"ExchangeRate"> | Date | string
  }

  export type ExchangeRateUpsertWithWhereUniqueWithoutToCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    update: XOR<ExchangeRateUpdateWithoutToCurrencyInput, ExchangeRateUncheckedUpdateWithoutToCurrencyInput>
    create: XOR<ExchangeRateCreateWithoutToCurrencyInput, ExchangeRateUncheckedCreateWithoutToCurrencyInput>
  }

  export type ExchangeRateUpdateWithWhereUniqueWithoutToCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    data: XOR<ExchangeRateUpdateWithoutToCurrencyInput, ExchangeRateUncheckedUpdateWithoutToCurrencyInput>
  }

  export type ExchangeRateUpdateManyWithWhereWithoutToCurrencyInput = {
    where: ExchangeRateScalarWhereInput
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyWithoutToCurrencyInput>
  }

  export type ConversionHistoryUpsertWithWhereUniqueWithoutFromCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    update: XOR<ConversionHistoryUpdateWithoutFromCurrencyInput, ConversionHistoryUncheckedUpdateWithoutFromCurrencyInput>
    create: XOR<ConversionHistoryCreateWithoutFromCurrencyInput, ConversionHistoryUncheckedCreateWithoutFromCurrencyInput>
  }

  export type ConversionHistoryUpdateWithWhereUniqueWithoutFromCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    data: XOR<ConversionHistoryUpdateWithoutFromCurrencyInput, ConversionHistoryUncheckedUpdateWithoutFromCurrencyInput>
  }

  export type ConversionHistoryUpdateManyWithWhereWithoutFromCurrencyInput = {
    where: ConversionHistoryScalarWhereInput
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyInput>
  }

  export type ConversionHistoryUpsertWithWhereUniqueWithoutToCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    update: XOR<ConversionHistoryUpdateWithoutToCurrencyInput, ConversionHistoryUncheckedUpdateWithoutToCurrencyInput>
    create: XOR<ConversionHistoryCreateWithoutToCurrencyInput, ConversionHistoryUncheckedCreateWithoutToCurrencyInput>
  }

  export type ConversionHistoryUpdateWithWhereUniqueWithoutToCurrencyInput = {
    where: ConversionHistoryWhereUniqueInput
    data: XOR<ConversionHistoryUpdateWithoutToCurrencyInput, ConversionHistoryUncheckedUpdateWithoutToCurrencyInput>
  }

  export type ConversionHistoryUpdateManyWithWhereWithoutToCurrencyInput = {
    where: ConversionHistoryScalarWhereInput
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyWithoutToCurrencyInput>
  }

  export type UserCreateWithoutFavoriteCurrenciesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversions?: ConversionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteCurrenciesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversions?: ConversionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteCurrenciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteCurrenciesInput, UserUncheckedCreateWithoutFavoriteCurrenciesInput>
  }

  export type CurrencyCreateWithoutFavoriteCurrenciesInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ratesFrom?: ExchangeRateCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutFavoriteCurrenciesInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ratesFrom?: ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutFavoriteCurrenciesInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutFavoriteCurrenciesInput, CurrencyUncheckedCreateWithoutFavoriteCurrenciesInput>
  }

  export type UserUpsertWithoutFavoriteCurrenciesInput = {
    update: XOR<UserUpdateWithoutFavoriteCurrenciesInput, UserUncheckedUpdateWithoutFavoriteCurrenciesInput>
    create: XOR<UserCreateWithoutFavoriteCurrenciesInput, UserUncheckedCreateWithoutFavoriteCurrenciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteCurrenciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteCurrenciesInput, UserUncheckedUpdateWithoutFavoriteCurrenciesInput>
  }

  export type UserUpdateWithoutFavoriteCurrenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversions?: ConversionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteCurrenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversions?: ConversionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CurrencyUpsertWithoutFavoriteCurrenciesInput = {
    update: XOR<CurrencyUpdateWithoutFavoriteCurrenciesInput, CurrencyUncheckedUpdateWithoutFavoriteCurrenciesInput>
    create: XOR<CurrencyCreateWithoutFavoriteCurrenciesInput, CurrencyUncheckedCreateWithoutFavoriteCurrenciesInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutFavoriteCurrenciesInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutFavoriteCurrenciesInput, CurrencyUncheckedUpdateWithoutFavoriteCurrenciesInput>
  }

  export type CurrencyUpdateWithoutFavoriteCurrenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratesFrom?: ExchangeRateUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutFavoriteCurrenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratesFrom?: ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyCreateWithoutRatesFromInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutCurrencyInput
    ratesTo?: ExchangeRateCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutRatesFromInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput
    ratesTo?: ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutRatesFromInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutRatesFromInput, CurrencyUncheckedCreateWithoutRatesFromInput>
  }

  export type CurrencyCreateWithoutRatesToInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateCreateNestedManyWithoutFromCurrencyInput
    conversionsFrom?: ConversionHistoryCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutRatesToInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput
    conversionsFrom?: ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput
    conversionsTo?: ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutRatesToInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutRatesToInput, CurrencyUncheckedCreateWithoutRatesToInput>
  }

  export type CurrencyUpsertWithoutRatesFromInput = {
    update: XOR<CurrencyUpdateWithoutRatesFromInput, CurrencyUncheckedUpdateWithoutRatesFromInput>
    create: XOR<CurrencyCreateWithoutRatesFromInput, CurrencyUncheckedCreateWithoutRatesFromInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutRatesFromInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutRatesFromInput, CurrencyUncheckedUpdateWithoutRatesFromInput>
  }

  export type CurrencyUpdateWithoutRatesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput
    ratesTo?: ExchangeRateUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutRatesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput
    ratesTo?: ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUpsertWithoutRatesToInput = {
    update: XOR<CurrencyUpdateWithoutRatesToInput, CurrencyUncheckedUpdateWithoutRatesToInput>
    create: XOR<CurrencyCreateWithoutRatesToInput, CurrencyUncheckedCreateWithoutRatesToInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutRatesToInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutRatesToInput, CurrencyUncheckedUpdateWithoutRatesToInput>
  }

  export type CurrencyUpdateWithoutRatesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUpdateManyWithoutFromCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutRatesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput
    conversionsTo?: ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput
  }

  export type UserCreateWithoutConversionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversionsInput, UserUncheckedCreateWithoutConversionsInput>
  }

  export type CurrencyCreateWithoutConversionsFromInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateCreateNestedManyWithoutToCurrencyInput
    conversionsTo?: ConversionHistoryCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutConversionsFromInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput
    conversionsTo?: ConversionHistoryUncheckedCreateNestedManyWithoutToCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutConversionsFromInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutConversionsFromInput, CurrencyUncheckedCreateWithoutConversionsFromInput>
  }

  export type CurrencyCreateWithoutConversionsToInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryCreateNestedManyWithoutFromCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutConversionsToInput = {
    id?: string
    name: string
    code: string
    symbol: string
    type: $Enums.CurrencyType
    rate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedCreateNestedManyWithoutCurrencyInput
    ratesFrom?: ExchangeRateUncheckedCreateNestedManyWithoutFromCurrencyInput
    ratesTo?: ExchangeRateUncheckedCreateNestedManyWithoutToCurrencyInput
    conversionsFrom?: ConversionHistoryUncheckedCreateNestedManyWithoutFromCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutConversionsToInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutConversionsToInput, CurrencyUncheckedCreateWithoutConversionsToInput>
  }

  export type UserUpsertWithoutConversionsInput = {
    update: XOR<UserUpdateWithoutConversionsInput, UserUncheckedUpdateWithoutConversionsInput>
    create: XOR<UserCreateWithoutConversionsInput, UserUncheckedCreateWithoutConversionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversionsInput, UserUncheckedUpdateWithoutConversionsInput>
  }

  export type UserUpdateWithoutConversionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CurrencyUpsertWithoutConversionsFromInput = {
    update: XOR<CurrencyUpdateWithoutConversionsFromInput, CurrencyUncheckedUpdateWithoutConversionsFromInput>
    create: XOR<CurrencyCreateWithoutConversionsFromInput, CurrencyUncheckedCreateWithoutConversionsFromInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutConversionsFromInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutConversionsFromInput, CurrencyUncheckedUpdateWithoutConversionsFromInput>
  }

  export type CurrencyUpdateWithoutConversionsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUpdateManyWithoutToCurrencyNestedInput
    conversionsTo?: ConversionHistoryUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutConversionsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput
    conversionsTo?: ConversionHistoryUncheckedUpdateManyWithoutToCurrencyNestedInput
  }

  export type CurrencyUpsertWithoutConversionsToInput = {
    update: XOR<CurrencyUpdateWithoutConversionsToInput, CurrencyUncheckedUpdateWithoutConversionsToInput>
    create: XOR<CurrencyCreateWithoutConversionsToInput, CurrencyUncheckedCreateWithoutConversionsToInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutConversionsToInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutConversionsToInput, CurrencyUncheckedUpdateWithoutConversionsToInput>
  }

  export type CurrencyUpdateWithoutConversionsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUpdateManyWithoutFromCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutConversionsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    type?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteCurrencies?: FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyNestedInput
    ratesFrom?: ExchangeRateUncheckedUpdateManyWithoutFromCurrencyNestedInput
    ratesTo?: ExchangeRateUncheckedUpdateManyWithoutToCurrencyNestedInput
    conversionsFrom?: ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyNestedInput
  }

  export type FavoriteCurrencyCreateManyUserInput = {
    id?: string
    currencyId: string
    createdAt?: Date | string
  }

  export type ConversionHistoryCreateManyUserInput = {
    id?: string
    fromCurrencyId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type FavoriteCurrencyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrencyUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput
  }

  export type FavoriteCurrencyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromCurrency?: CurrencyUpdateOneRequiredWithoutConversionsFromNestedInput
    toCurrency?: CurrencyUpdateOneRequiredWithoutConversionsToNestedInput
  }

  export type ConversionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyCreateManyCurrencyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ExchangeRateCreateManyFromCurrencyInput = {
    id?: string
    toCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ExchangeRateCreateManyToCurrencyInput = {
    id?: string
    fromCurrencyId: string
    rate: number
    source: $Enums.RateSource
    timestamp?: Date | string
  }

  export type ConversionHistoryCreateManyFromCurrencyInput = {
    id?: string
    userId: string
    toCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type ConversionHistoryCreateManyToCurrencyInput = {
    id?: string
    userId: string
    fromCurrencyId: string
    amount: number
    result: number
    rateUsed: number
    source: $Enums.RateSource
    createdAt?: Date | string
  }

  export type FavoriteCurrencyUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteCurrenciesNestedInput
  }

  export type FavoriteCurrencyUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCurrencyUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toCurrency?: CurrencyUpdateOneRequiredWithoutRatesToNestedInput
  }

  export type ExchangeRateUncheckedUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromCurrency?: CurrencyUpdateOneRequiredWithoutRatesFromNestedInput
  }

  export type ExchangeRateUncheckedUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversionsNestedInput
    toCurrency?: CurrencyUpdateOneRequiredWithoutConversionsToNestedInput
  }

  export type ConversionHistoryUncheckedUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    toCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversionsNestedInput
    fromCurrency?: CurrencyUpdateOneRequiredWithoutConversionsFromNestedInput
  }

  export type ConversionHistoryUncheckedUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateManyWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromCurrencyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    result?: FloatFieldUpdateOperationsInput | number
    rateUsed?: FloatFieldUpdateOperationsInput | number
    source?: EnumRateSourceFieldUpdateOperationsInput | $Enums.RateSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}