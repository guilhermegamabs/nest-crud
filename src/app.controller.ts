import { Controller, Get } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';

@Controller('user')
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('create')
  getHello(): string {
    return this.appService.getHello();
  }
}
