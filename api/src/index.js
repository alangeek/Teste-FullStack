import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes.js'
import './database/index.js'

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(morgan(':method :url :response-time'))
    this.server.use((req, res, next) => {
      res.header(
        'Access-Control-Allow-Origin',
        'https://teste-cliente.netlify.app'
      )
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      )
      this.server.use(cors())
      next()
    })
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
