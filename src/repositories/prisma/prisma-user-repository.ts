import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, email: string, age: number) {
    const users = await this.prisma.user.create({
      data: {
        name,
        email,
        age,
      },
    });

    return users;
  }

  async read(id: number) {
    const user = this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) return { message: 'User does not exists on database' };

    return await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async deleteUser(id: number) {
    const user = this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) return { message: 'User does not exists on database' };

    await this.prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return { message: 'User Deleted Successfully!' };
  }

  async edit(id: number, name: string, age: number) {
    const user = this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) return { message: 'User does not exists on database' };

    await this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        age,
      },
    });

    return { message: 'User Edited Successfully!' };
  }

  async showAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
