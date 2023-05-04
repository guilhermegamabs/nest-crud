import { IsNotEmpty, Length } from 'class-validator';

export class CreateUser {
  @IsNotEmpty({ message: 'You must put a name' })
  name: string;
  @IsNotEmpty({ message: 'You must put a email' })
  email: string;
  @IsNotEmpty({ message: 'You must put a age' })
  age: number;
}
