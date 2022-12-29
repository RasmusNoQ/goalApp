const express = require('express')
const {registerUser,loginUser,getMe} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const userRouter = express.Router()


userRouter.post('/',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/me',protect,getMe)









module.exports = {userRouter};