import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import dbConfig from '../config/database'

const models = []

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
