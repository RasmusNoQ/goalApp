const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors');
const {router} = require('./routes/goalRoutes')
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const port = process.env.PORT || 8000

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
app.use(cors())
app.use('/api/goals',router);

app.listen(port,() => console.log(`Server listening on port:${port}`))