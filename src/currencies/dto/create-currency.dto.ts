import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';

export enum CurrencyType {
  FIAT = 'FIAT',
  CRYPTO = 'CRYPTO',
  COMMODITY = 'COMMODITY',
}

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

  @IsNumber()
  rate: number = 1.0;
} 