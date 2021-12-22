import { User } from '../../entities/User'
import prisma from '../../../prisma/prisma'
import { IUsersRepository } from './../IUsersRepository'
import { hash } from 'bcryptjs'

export class PostgresUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<User> {
    const user = await prisma.User.findUnique({ where: { id } })

    return user
  }
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.User.findUnique({ where: { email } })

    return user
  }
  async findMany(is_active?: boolean): Promise<User[]> {
    const users = await prisma.User.findMany({ where: { is_active } })

    return users
  }
  async save(user: User): Promise<void> {
    try {
      await prisma.User.create({ data: { user } })

      return
    } catch (err) {
      throw new Error(err.message)
    }
  }
  async update(id: string, user: Partial<User>): Promise<void> {
    try {
      await prisma.User.update({ where: { id } }, { data: { user } })

      return
    } catch (err) {
      throw new Error(err.message)
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await prisma.User.delete({ where: { id } })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
