import mongoose from 'mongoose'

import Customer from '../../models/customer.model.js'

class CustomerController {
  async index(req, res) {
    try {
      const allCustomers = await Customer.find()
      res.status(200).json(allCustomers)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const customer = await Customer.findById(id)
      if (!customer) return
      res.status(200).json(customer)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async create(req, res) {
    try {
      const customer = req.body
      const createCustomer = await Customer.create(customer)
      res.status(201).json(createCustomer)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, email, phone, cpf } = req.body

      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Cliente não encontrado')

      const updateCustomer = { name, email, phone, cpf, _id: id }

      await Customer.findByIdAndUpdate(id, updateCustomer, { new: true })

      res.status(200).json(updateCustomer)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      await Customer.findByIdAndRemove(id)
      res.status(200).json({ message: 'Cliente deletado' })
    } catch (error) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }
}

export default new CustomerController()
