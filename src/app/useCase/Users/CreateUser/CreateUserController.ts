import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, admin, is_active } = req.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        admin,
        is_active
      })

      return res.status(201).send()
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
}
