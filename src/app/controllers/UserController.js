import User from '../model/User'
import userValidation from '../validation/userValidation'
import { v4 } from 'uuid'

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll()

      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }

  async show(req, res) {
    if (!req.body.id) return res.status(400).json({ error: 'Missing params' })
    try {
      const { id } = req.params
      const user = await User.findByPk(id)

      return res.status(200).json(user)
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }

  async store(req, res) {
    if (!(await userValidation.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid data type' })
    }
    const { name, email, password } = req.body

    try {
      const emailRegistered = await User.findOne({ where: { email } })
      if (emailRegistered) throw new Error('Email already in use')

      await User.create({ id: v4(), name, email, password })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }

    return res.status(201).json({ message: 'User created successfully' })
  }

  async update(req, res) {
    if (!(await userValidation.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid data type' })
    }
  }

  async delete(req, res) {
    if (!req.params.id) return res.status(400).json({ error: 'Missing params' })
    try {
      const { id } = req.params
      await User.destroy({ where: { id } })
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: 'Failed to delete user' })
    }
    return res.status(204).json()
  }
}

export default new UserController()
