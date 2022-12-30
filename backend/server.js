const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const colors = require('colors');
const {router} = require('./routes/goalRoutes')
const {userRouter} = require('./routes/userRoutes');
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
app.use('/api/users/',userRouter);

//Server frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))


    app.get('*',(req,res) => res.sendFile(path.
    resolve(__dirname,'../','frontend','build','index.html')));
}else{
    app.get('/',(req,res) =>{
        res.send('Please set to production')
    })
}


app.listen(port,() => console.log(`Server listening on port:${port}`.cyan.underline))