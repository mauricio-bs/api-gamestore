import Sequelize, { Model } from 'sequelize'

class CardFlag extends Model {
  static init(sequelize) {
    super.init(
      {
        flag: Sequelize.STRING,
        tBand: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default CardFlag
