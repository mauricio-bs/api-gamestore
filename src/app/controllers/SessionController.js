import User from '../model/User'
import sessionValidation from '../validation/sessionValidation'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const emailOrPasswordIncorrect = () => {
      return res
        .status(400)
        .json({ error: 'Make sure your password or email are correct' })
    }
    if (!(await sessionValidation.isValid(req.body))) emailOrPasswordIncorrect()

    const { email, password } = req.body

    try {
      const user = User.findOne({ where: { email } })

      if (!user) emailOrPasswordIncorrect()
      if (!(await user.checkPassword(password))) emailOrPasswordIncorrect()

      return res.status(200).json({
        message: `Welcome ${user.name}`,
        id: user.id,
        token: jwt.sign({ id: user.id, admin: user.admin }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      })
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }
}

export default new SessionController()
