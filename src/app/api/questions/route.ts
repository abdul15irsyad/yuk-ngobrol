import { prisma } from '@/lib/prisma';
import { shuffle } from '@/utils/array.util';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') ?? undefined;
  const categoryNames = searchParams
    .get('categoryNames')
    ?.split(',')
    ?.map((categoryName) => categoryName.trim());

  const where = {
    category: categoryNames
      ? {
          name: {
            in: categoryNames,
          },
        }
      : undefined,
    question: search
      ? {
          contains: search,
        }
      : undefined,
  };
  const questions = await prisma.question.findMany({
    where,
    select: {
      question: true,
      category: {
        select: {
          name: true,
          color: true,
          logo: {
            select: {
              path: true,
              filename: true,
              mime: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json({
    message: 'get questions',
    data: shuffle(questions),
  });
};
