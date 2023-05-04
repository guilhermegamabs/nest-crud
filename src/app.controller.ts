import { Body, Controller, Post, Param, Get, Delete } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';
import { CreateUser } from './dtos/create-user';

@Controller('')
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('user/create')
  async create(@Body() body: CreateUser) {
    const { name, email, age } = body;

    await this.userRepository.create(name, email, age);
  }

  @Get('user/read/:id')
  async read(@Param('id') id: number) {
    const user = await this.userRepository.read(id);
    return user;
  }

  @Delete('user/delete/:id')
  async deleteUser(@Param('id') id: number) {
    const user = await this.userRepository.deleteUser(id);
    return user;
  }
}
