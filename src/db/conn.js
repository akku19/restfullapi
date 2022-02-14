const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect('mongodb+srv://akash:akkuroup@cluster0.cl9rr.mongodb.net/mernstack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection is successfully')
}).catch((e)=>{
    console.log('no connection'); 
})