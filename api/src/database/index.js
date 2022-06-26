import mongoose from 'mongoose'

import config from '../config/database.js'

class Database {
  constructor() {
    this.mongooseDataBase()
  }

  mongooseDataBase() {
    this.connection = mongoose
      .connect(config.url)
      .then(() => {
        console.log('Connect database sucessuful')
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }
}

export default new Database()
