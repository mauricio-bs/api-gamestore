import { User } from '../../entities/User'
import { IUsersRepository } from './../IUsersRepository'

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[]

  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  findMany(is_active?: boolean): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(id: string, user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
