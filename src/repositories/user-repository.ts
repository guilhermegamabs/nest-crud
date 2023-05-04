export abstract class UserRepository {
  abstract create(name: string, email: string, age: number): Promise<object>;
  abstract read(id: number): Promise<object>;
  abstract deleteUser(id: number): Promise<object>;
  abstract edit(id: number, name: string, age: number): Promise<object>;
  abstract showAll(): Promise<object>;
}
