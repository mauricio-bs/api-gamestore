import { CreateUserUseCase } from './CreateUserUseCase'
import { PostgresUsersRepository } from './../../../repositories/implementations/PostgresUsersRepository'
import { CreateUserController } from './CreateUserController'

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
