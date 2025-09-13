import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

type CorsOriginCallback = (err: Error | null, allow: boolean) => void;
type CorsOriginFn = (
  origin: string | undefined,
  callback: CorsOriginCallback,
) => void;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const originsFromEnv: string[] = (process.env.FRONTEND_ORIGIN ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const originChecker: CorsOriginFn = (origin, cb) => {
    if (!origin) return cb(null, true);

    const isLocalhost = /^https?:\/\/localhost(:\d+)?$/.test(origin);
    const isAllowed = isLocalhost || originsFromEnv.includes(origin);
    return isAllowed
      ? cb(null, true)
      : cb(new Error('CORS: Origin not allowed'), false);
  };

  app.enableCors({
    origin:
      originsFromEnv.length > 0
        ? originChecker
        : (((o, cb) => {
            if (!o) return cb(null, true);
            const ok = /^https?:\/\/localhost(:\d+)?$/.test(o);
            return ok
              ? cb(null, true)
              : cb(new Error('CORS: Origin not allowed'), false);
          }) as CorsOriginFn),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] as const,
    allowedHeaders: ['Content-Type', 'Authorization'] as const,
    credentials: (process.env.CORS_CREDENTIALS ?? 'false') === 'true',
  });

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, () => {
    console.log(`===>>>> Server running on ${port}`);
  });
}

bootstrap().catch((err: unknown) => {
  let msg = 'Bootstrap failed';
  if (err instanceof Error) msg = `${msg}: ${err.message}`;
  console.error(msg);
  process.exitCode = 1;
});
