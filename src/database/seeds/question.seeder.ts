import { Prisma, PrismaClient, Question } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { readFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const questionSeeder = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const questionsJSON: { question: string; category: string }[] = JSON.parse(
    readFileSync('src/database/data/data.json', 'utf-8'),
  );
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });
  const data: Pick<Question, 'id' | 'categoryId' | 'question'>[] = [];
  const categoryMap: Record<string, string> = {
    diriSendiri: 'Diri Sendiri',
    masaLalu: 'Masa Lalu',
    kehidupan: 'Kehidupan',
    hubungan: 'Hubungan',
  };
  for (const { question, category } of questionsJSON) {
    data.push({
      id: uuidv4(),
      categoryId: categories.find(({ name }) => name === categoryMap[category])
        ?.id as string,
      question,
    });
  }

  await prisma.question.createMany({ data });
};
