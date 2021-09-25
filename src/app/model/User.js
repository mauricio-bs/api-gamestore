import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN
      },
      {
        sequelize,
      }
    )

    this.beforeSave(async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10)
      }
    })
    return this
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }

  static associate(models) {
    
  }
}

export default User
