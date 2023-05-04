import { IsNotEmpty } from 'class-validator';

export class ReadUser {
  @IsNotEmpty({ message: 'You must put a id' })
  id: number;
}
