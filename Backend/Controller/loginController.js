import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Login } from '../models/loginModel.js'

//Register Controll

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      res.json({
        heed: 'Please Enter All Fields',
        result: false,
      })
    }
    const existUser = await Login.findOne({ email })
    if (existUser) {
      res.json({
        heed: 'This email address is already registered',
        result: false,
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new Login({
      name,
      email,
      password: hashPassword,
    })
    await newUser.save()

    res.json({
      heed: 'Registration was successful',
      result: true,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}

//Login Controll

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await Login.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.json({
        heed: 'Kindly complete the registration process',
        result: false,
      })
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN)
      res.cookie('token', token, { httpOnly: true })

      res.json({
        heed: 'Welcome to STARS, happy shopping!',
        result: true,
        token: token,
      })
    }
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}

//Logout Controller
export const logoutController = async (req, res) => {
  res.clearCookie('token')
  res.json({
    heed: 'Cookie Was Cleared',
    result: true,
  })
}

//Admin Login Controll

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(password, process.env.JWT_TOKEN)
      res.json({
        heed: 'Welcome Admin ',
        result: true,
        token,
      })
    } else {
      res.json({
        heed: 'Admin credentials wrong',
        result: false,
      })
    }
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
