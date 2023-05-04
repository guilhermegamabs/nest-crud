import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';
import { CreateUser } from './dtos/create-user';

@Controller('user')
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('create')
  async create(@Body() body: CreateUser) {
    const { name, email, age } = body;

    await this.userRepository.create(name, email, age);
  }
}
