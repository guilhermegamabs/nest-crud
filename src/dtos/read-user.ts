import { IsNotEmpty } from 'class-validator';

export class ReadUser {
  @IsNotEmpty({ message: 'You must put an id' })
  id: number;
}
