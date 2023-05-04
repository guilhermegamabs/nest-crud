export abstract class UserRepository {
  abstract create(name: string, email: string, age: number);
  abstract read(id: number);
  abstract deleteUser(id: number);
}
