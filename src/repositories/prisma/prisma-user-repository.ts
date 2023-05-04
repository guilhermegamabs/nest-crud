import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, email: string, age: number): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        email,
        age,
      },
    });
  }

  async read(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
