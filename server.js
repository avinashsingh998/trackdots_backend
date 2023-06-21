const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/DB/connection');
const cookiesParser = require('cookie-parser');

const fs = require('fs')
const https = require('https')
const path = require('path')


require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
const corsOptions ={
    origin:['http://localhost:4201'],
    credentials:true,
    optionSuccessStatus:200
}
connectToDatabase();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookiesParser())

// console.log("this is packages  ",Package.find())
  

// app.use('/api/package', require('./src/controllers/package'))
app.use('/admin', require('./src/routers/adminRoute'))
app.use('/user', require('./src/routers/userRoute'))

  
 

app.listen(port, ()=>{
    console.log("API is listening the port "+port) 
    })

// const sslServer = https.createServer({
//     key: fs.readFileSync(path.join(__dirname, 'assets', "cert", 'key.pem')) ,  
//     cert: fs.readFileSync(path.join(__dirname, 'assets', "cert", 'cert.pem'))   
// },
// app
// );

// sslServer.listen(port, ()=>{
//         console.log("Secure API is listening the port "+port) 
//         })
