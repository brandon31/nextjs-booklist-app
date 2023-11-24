import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createBooklistSchema = z.object({
  title: z.string().min(1).max(255),
  author: z.string().min(1),
  bookNumber: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createBooklistSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBook = await prisma.booklist.create({
    data: {
      title: body.title,
      author: body.author,
      bookNumber: body.bookNumber,
    },
  });

  return NextResponse.json(newBook, { status: 201 });
}
