import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConversionHistoryDto } from './dto/conversion-history.dto';

@Injectable()
export class ConversionsService {
  constructor(private prisma: PrismaService) {}

  async conversion(
    fromCurrencyId: string,
    toCurrencyId: string,
    amount: number,
  ) {
    const fromCurrency = await this.prisma.currency.findUnique({
      where: { id: fromCurrencyId },
    });

    const toCurrency = await this.prisma.currency.findUnique({
      where: { id: toCurrencyId },
    });

    if (!fromCurrency || !toCurrency) {
      throw new NotFoundException('Invalid currency ID provided');
    }

    const latestRate = await this.prisma.exchangeRate.findFirst({
      where: {
        fromCurrencyId,
        toCurrencyId,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    if (!latestRate) {
      throw new NotFoundException('No exchange rate found for the provided currencies');
    }

    const result = amount * latestRate.rate;

    return {
      message: 'Amount converted successfully',
      data: {
        fromCurrency: fromCurrencyId,
        toCurrency: toCurrencyId,
        rateUsed: latestRate.rate,
        timestamp: latestRate.timestamp,
        convertedAmount: result,
      },
    };
  }


async create(conversionHistoryDto: ConversionHistoryDto) {
    const { userId, fromCurrencyId, toCurrencyId, amount } = conversionHistoryDto;

    const latestRate = await this.prisma.exchangeRate.findFirst({
      where: { fromCurrencyId, toCurrencyId },
      orderBy: { timestamp: 'desc' },
    });

    if (!latestRate) {
      throw new NotFoundException('No exchange rate found for the provided currencies');
    }

    const result = amount * latestRate.rate;

    const history = await this.prisma.conversionHistory.create({
      data: {
        userId,
        fromCurrencyId,
        toCurrencyId,
        amount,
        result,
        rateUsed: latestRate.rate,
      },
    });

    return {
      message: 'Conversion saved successfully',
      data: history,
    };
  }

}
