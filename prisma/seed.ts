import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample currencies
  const currencies = [
    {
      name: 'US Dollar',
      code: 'USD',
      symbol: '$',
      type: 'FIAT' as const,
      rate: 1.0,
    },
    {
      name: 'Euro',
      code: 'EUR',
      symbol: '€',
      type: 'FIAT' as const,
      rate: 0.85,
    },
    {
      name: 'British Pound',
      code: 'GBP',
      symbol: '£',
      type: 'FIAT' as const,
      rate: 0.73,
    },
    {
      name: 'Japanese Yen',
      code: 'JPY',
      symbol: '¥',
      type: 'FIAT' as const,
      rate: 110.0,
    },
    {
      name: 'Bitcoin',
      code: 'BTC',
      symbol: '₿',
      type: 'CRYPTO' as const,
      rate: 45000.0,
    },
    {
      name: 'Ethereum',
      code: 'ETH',
      symbol: 'Ξ',
      type: 'CRYPTO' as const,
      rate: 3000.0,
    },
    {
      name: 'Gold',
      code: 'XAU',
      symbol: 'Au',
      type: 'COMMODITY' as const,
      rate: 1800.0,
    },
    {
      name: 'Silver',
      code: 'XAG',
      symbol: 'Ag',
      type: 'COMMODITY' as const,
      rate: 25.0,
    },
  ];

  console.log('📊 Creating currencies...');
  for (const currency of currencies) {
    await prisma.currency.upsert({
      where: { code: currency.code },
      update: currency,
      create: currency,
    });
  }

  // Create sample users
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: hashedPassword,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: hashedPassword,
    },
  ];

  console.log('👥 Creating users...');
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }

  // Create sample favorite currencies
  const john = await prisma.user.findUnique({
    where: { email: 'john.doe@example.com' },
  });

  const jane = await prisma.user.findUnique({
    where: { email: 'jane.smith@example.com' },
  });

  const btc = await prisma.currency.findUnique({
    where: { code: 'BTC' },
  });

  const eth = await prisma.currency.findUnique({
    where: { code: 'ETH' },
  });

  const eur = await prisma.currency.findUnique({
    where: { code: 'EUR' },
  });

  if (john && btc && eth) {
    console.log('⭐ Creating favorite currencies for John...');
    await prisma.favoriteCurrency.upsert({
      where: {
        userId_currencyId: {
          userId: john.id,
          currencyId: btc.id,
        },
      },
      update: {},
      create: {
        userId: john.id,
        currencyId: btc.id,
      },
    });

    await prisma.favoriteCurrency.upsert({
      where: {
        userId_currencyId: {
          userId: john.id,
          currencyId: eth.id,
        },
      },
      update: {},
      create: {
        userId: john.id,
        currencyId: eth.id,
      },
    });
  }

  if (jane && eur) {
    console.log('⭐ Creating favorite currencies for Jane...');
    await prisma.favoriteCurrency.upsert({
      where: {
        userId_currencyId: {
          userId: jane.id,
          currencyId: eur.id,
        },
      },
      update: {},
      create: {
        userId: jane.id,
        currencyId: eur.id,
      },
    });
  }

  console.log('✅ Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 