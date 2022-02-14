const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    console.log('connection is successfully')
}).catch((e)=>{
    console.log('no connection'); 
})