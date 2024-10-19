import { PrismaClient } from '@prisma/client';
import { categorySeeder } from './seeds/category.seeder';
import { questionSeeder } from './seeds/question.seeder';
import { fileSeeder } from './seeds/file.seeder';

const prisma = new PrismaClient();

(async () => {
  try {
    const seeds = [fileSeeder, categorySeeder, questionSeeder];
    for await (const seed of seeds) {
      if (!(await prisma.seeder.findFirst({ where: { name: seed.name } }))) {
        console.info(`${seed.name} executing`);
        await seed(prisma);
        await prisma.seeder.create({ data: { name: seed.name } });
        console.info(`${seed.name} executed`);
      }
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
