import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { CurrencyType } from '@prisma/client'; // 👈 usar el de Prisma

export class CreateCurrencyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsEnum(CurrencyType)
  type: CurrencyType;

}
