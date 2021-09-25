import Sequelize, { Model } from 'sequelize'

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        postal_code: Sequelize.INTEGER,
        neighborhood: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.User)

    this.hasOne(models.Country)
    this.hasOne(models.State)
    this.hasOne(models.City)
  }
}

export default Address
