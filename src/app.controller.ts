import { Body, Controller, Post, Param, Get, Delete } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';
import { CreateUser } from './dtos/create-user';
import { EditUser } from './dtos/edit-user';

@Controller('')
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('user/create')
  async create(@Body() body: CreateUser) {
    const { name, email, age } = body;

    const user = await this.userRepository.create(name, email, age);
    return user;
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

  @Post('user/edit/:id')
  async edit(@Param('id') id: number, @Body() body: EditUser) {
    const { name, age } = body;

    const user = await this.userRepository.edit(id, name, age);
    return user;
  }
}
