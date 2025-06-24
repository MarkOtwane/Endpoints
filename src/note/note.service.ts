import { Injectable } from '@nestjs/common';
import { NoteBook, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.NoteBookCreateInput): Promise<NoteBook> {
    return this.prisma.notebook.create({ data });
  }

  async findAll(userId: string): Promise<NoteBook[]> {
    return this.prisma.notebook.findMany({
      where: { userId },
    });
  }

  async findOne(id: string, userId: string): Promise<NoteBook | null> {
    return this.prisma.notebook.findFirst({
      where: { id, userId },
    });
  }

  async update(
    id: string,
    data: Prisma.NoteBookUpdateInput,
    userId: string,
  ): Promise<NoteBook | null> {
    const result = await this.prisma.notebook.updateMany({
      where: { id, userId },
      data,
    });

    if (result.count === 0) return null;

    return this.prisma.notebook.findUnique({ where: { id } });
  }

  async remove(id: string, userId: string): Promise<boolean> {
    const result = await this.prisma.notebook.deleteMany({
      where: { id, userId },
    });

    return result.count > 0;
  }
}
