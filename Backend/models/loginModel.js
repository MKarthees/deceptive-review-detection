import mongoose from 'mongoose'

const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})

export const Login = mongoose.model('User', loginSchema)
