import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { FavoriteCurrenciesModule } from './favorite-currencies/favorite-currencies.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CurrenciesModule,
    FavoriteCurrenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
