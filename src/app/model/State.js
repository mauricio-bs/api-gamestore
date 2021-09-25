import Sequelize, { Model } from 'sequelize'

class State extends Model {
  static init(sequelize) {
    super.init(
      {
          name: Sequelize.STRING,
          initials: Sequelize.STRING
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Country)
    this.hasMany(models.City)
  }
}

export default State
