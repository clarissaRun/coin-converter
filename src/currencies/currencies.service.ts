// import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateCurrencyDto } from './dto/create-currency.dto';
// import { UpdateCurrencyDto } from './dto/update-currency.dto';

// @Injectable()
// export class CurrenciesService {
//   constructor(private prisma: PrismaService) {}

//   async create(createCurrencyDto: CreateCurrencyDto) {
//     const existingCurrency = await this.prisma.currency.findUnique({
//       where: { code: createCurrencyDto.code },
//     });

//     if (existingCurrency) {
//       throw new ConflictException('Currency with this code already exists');
//     }

//     return this.prisma.currency.create({
//       data: createCurrencyDto,
//     });
//   }

//   async findAll() {
//     return this.prisma.currency.findMany();
//   }

//   async findOne(id: string) {
//     const currency = await this.prisma.currency.findUnique({
//       where: { id },
//     });

//     if (!currency) {
//       throw new NotFoundException('Currency not found');
//     }

//     return currency;
//   }

//   async findByCode(code: string) {
//     return this.prisma.currency.findUnique({
//       where: { code },
//     });
//   }

//   async update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
//     await this.findOne(id);

//     if (updateCurrencyDto.code) {
//       const existingCurrency = await this.prisma.currency.findUnique({
//         where: { code: updateCurrencyDto.code },
//       });

//       if (existingCurrency && existingCurrency.id !== id) {
//         throw new ConflictException('Currency with this code already exists');
//       }
//     }

//     return this.prisma.currency.update({
//       where: { id },
//       data: updateCurrencyDto,
//     });
//   }

//   async remove(id: string) {
//     await this.findOne(id);
    
//     return this.prisma.currency.delete({
//       where: { id },
//     });
//   }

//   async updateRates(rates: { code: string; rate: number }[]) {
//     const updates = rates.map(({ code, rate }) =>
//       this.prisma.currency.updateMany({
//         where: { code },
//         data: { rate },
//       })
//     );

//     return Promise.all(updates);
//   }
// } 