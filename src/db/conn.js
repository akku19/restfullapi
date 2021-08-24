const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akash:akku@roup@realmcluster.ahvxm.mongodb.net/akash?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection is successfully')
}).catch((e)=>{
    console.log('no connection');
})