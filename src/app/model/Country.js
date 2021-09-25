import Sequelize, { Model } from 'sequelize'

class Country extends Model {
  static init(sequelize) {
    super.init(
      {
          name: Sequelize.STRING,
          initials: Sequelize.STRING(2),
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
      this.hasMany(models.State)
  }
}

export default Country
