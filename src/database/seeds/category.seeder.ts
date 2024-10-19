import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const categorySeeder = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const categories = [
    {
      id: '4fefe705-2322-4e97-b3e8-0712c137269a',
      name: 'Hubungan',
      logoId: '02572378-4573-4dc6-82b0-3811f210e528',
      color: '#df5682',
    },
    {
      id: 'f8697699-32ba-4b92-b4da-6c7b7ec9d95e',
      name: 'Diri Sendiri',
      logoId: 'e175fc54-0128-497b-8158-f27c158d08fc',
      color: '#1b5080',
    },
    {
      id: '2e1b2674-b934-48ec-831b-699a2c604063',
      name: 'Masa Lalu',
      logoId: '21dc6476-edf5-407e-878e-4491f15bf9a7',
      color: '#c36225',
    },
    {
      id: '1dd9cbb6-66a7-4db5-a535-847e3ed48b19',
      name: 'Kehidupan',
      logoId: '025d3254-c5b5-41f8-930f-3a1860bb6e75',
      color: '#1b701a',
    },
  ];

  await prisma.category.createMany({ data: categories });
};
