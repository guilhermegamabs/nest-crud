export abstract class UserRepository {
  abstract create(name: string, email: string, age: number): Promise<void>;
  abstract read(id: number);
}
