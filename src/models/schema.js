const mongoose = require('mongoose');
const validator = require('validator');
const StudentsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id is already prasent"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalide email")
            }
        }
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

const Students  = new mongoose.model('Student',StudentsSchema);
module.exports= Students;