import express from 'express'
import {
  adminLoginController,
  loginController,
  logoutController,
  registerController,
} from '../Controller/loginController.js'

const loginRoute = express.Router()

loginRoute.post('/register', registerController)
loginRoute.post('/login', loginController)
loginRoute.post('/logout', logoutController)
loginRoute.post('/admin', adminLoginController)

export default loginRoute
