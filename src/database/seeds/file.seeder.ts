import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const fileSeeder = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const files = [
    {
      id: '02572378-4573-4dc6-82b0-3811f210e528',
      path: 'images/icon',
      originalFilename: 'heart.png',
      filename: 'heart.png',
      mime: 'image/png',
      size: 17743,
    },
    {
      id: 'e175fc54-0128-497b-8158-f27c158d08fc',
      path: 'images/icon',
      originalFilename: 'footprint.png',
      filename: 'footprint.png',
      mime: 'image/png',
      size: 21202,
    },
    {
      id: '21dc6476-edf5-407e-878e-4491f15bf9a7',
      path: 'images/icon',
      originalFilename: 'wall-clock.png',
      filename: 'wall-clock.png',
      mime: 'image/png',
      size: 17691,
    },
    {
      id: '025d3254-c5b5-41f8-930f-3a1860bb6e75',
      path: 'images/icon',
      originalFilename: 'leaf.png',
      filename: 'leaf.png',
      mime: 'image/png',
      size: 17526,
    },
  ];

  await prisma.file.createMany({ data: files });
};
