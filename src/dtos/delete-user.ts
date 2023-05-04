import { IsNotEmpty } from 'class-validator';

export class DeleteUser {
  @IsNotEmpty({ message: 'You must put an id' })
  id: number;
}
