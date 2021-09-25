import Sequelize, { Model } from 'sequelize'

class Payment extends Model {
  static init(sequelize) {
    super.init(
      {
        ammount: Sequelize.DOUBLE,
        ammount_recived: Sequelize.DOUBLE,
        date: Sequelize.DATE,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.hasOne(models.PaymentType, { foreignKey: 'payment_id', as: 'payment' })
  }
}

export default Payment
