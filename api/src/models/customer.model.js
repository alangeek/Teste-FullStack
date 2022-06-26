import mongoose from 'mongoose'

const customerShema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    cpf: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Customer', customerShema)
