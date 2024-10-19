import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const categorySeeder = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const data = [
    {
      id: '4fefe705-2322-4e97-b3e8-0712c137269a',
      name: 'Hubungan',
    },
    {
      id: 'f8697699-32ba-4b92-b4da-6c7b7ec9d95e',
      name: 'Diri Sendiri',
    },
    {
      id: '2e1b2674-b934-48ec-831b-699a2c604063',
      name: 'Masa Lalu',
    },
    {
      id: '1dd9cbb6-66a7-4db5-a535-847e3ed48b19',
      name: 'Kehidupan',
    },
  ];

  await prisma.category.createMany({ data });
};
