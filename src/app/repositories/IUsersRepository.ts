import { User } from './../entities/User'

export interface IUsersRepository {
  //Searches
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
  //Massive Search
  findMany(is_active?: boolean): Promise<User[]>
  // Save
  save(user: User): Promise<void>
  // Update
  update(id: string, user: User): Promise<void>
  // Delete
  delete(id: string): Promise<void>
}
