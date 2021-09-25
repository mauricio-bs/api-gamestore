import Sequelize, { Model } from 'sequelize'

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'prouct_id', as: 'productCategory' })
  }
}

export default Category
