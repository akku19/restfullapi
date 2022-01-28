const mongoose = require('mongoose');
var validator = require('validator');
const StudentsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,       
        unique:[true,'email is already exist'],
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
           
    },
    phone:{
        type:Number,        
        required:true,
        min:10           
    },
    address:{
        type:String,
        require:true
    }
})

// we will create new model

const Students  = new mongoose.model('students',StudentsSchema);
module.exports= Students;