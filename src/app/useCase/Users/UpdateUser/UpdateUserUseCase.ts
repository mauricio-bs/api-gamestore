import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './UpdateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const emailAlreadyRegistered = await this.usersRepository.findByEmail(
      data.email
    )

    if (emailAlreadyRegistered) {
      throw new Error('Email already registered')
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}
