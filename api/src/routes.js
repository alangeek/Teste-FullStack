import { Router } from 'express'

import CustomerController from './controllers/http/customer.controller.js'

const routes = new Router()

routes.get('/customers', CustomerController.index)
routes.get('/customers/:id', CustomerController.show)
routes.post('/customers', CustomerController.create)
routes.put('/customers/:id', CustomerController.update)
routes.delete('/customers/:id', CustomerController.destroy)

export default routes
