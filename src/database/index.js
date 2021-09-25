import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import dbConfig from '../config/database'
//Models
import Address from '../app/model/Address'
import CardFlag from '../app/model/CardFlag'
import Category from '../app/model/Category'
import City from '../app/model/City'
import Country from '../app/model/Country'
import Payment from '../app/model/Payment'
import PaymentType from '../app/model/PaymentType'
import Product from '../app/model/Product'
import State from '../app/model/State'
import User from '../app/model/User'

const models = [
  User,
  Product,
  CardFlag,
  Address,
  City,
  State,
  Country,
  Payment,
  PaymentType,
  Category,
]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    models.map(model =>
      model
        .init(this.connection)
        .map(
          model => model.associate && model.associate(this.connection.models)
        )
    )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb://${process.env.HOST}:27017/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
