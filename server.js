const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/DB/connection');
const cookiesParser = require('cookie-parser')

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use(cookiesParser())
  

app.use('/api/package', require('./src/controllers/package'))
app.use('/admin', require('./src/routers/adminRoute'))
app.use('/user', require('./src/routers/userRoute'))
const corsOptions ={
    origin:'http://localhost:4201', 
    credentials:true,
    optionSuccessStatus:200
}
  
 

app.listen(port, ()=>{
    console.log("API is listening the port "+port) 
    })