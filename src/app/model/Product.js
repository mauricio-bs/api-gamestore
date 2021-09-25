import Sequelize, { Model } from 'sequelize'

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        stock_quantity: Sequelize.INTEGER,
        discount_percentage: Sequelize.INTEGER,
        price: Sequelize.DOUBLE,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:${process.env.PORT}/product-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Category)
  }
}

export default Product
