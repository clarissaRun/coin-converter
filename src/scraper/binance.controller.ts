import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('p2p')
  async getP2P() {
    const ads = await this.binanceService.scrapeP2P();
    return ads.map((ad) => ({
      vendedor: ad.advertiser.nickName,
      precio: `${ad.adv.price} ${ad.adv.fiatUnit}`,
      metodos: ad.adv.tradeMethods.map((m) => m.tradeMethodName),
    }));
  }
}
