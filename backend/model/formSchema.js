import mongoose from "mongoose";
import validator from "validator";
// name company email phone message
const formSchema = new mongoose.Schema({
    name: {
        type:String,
        requied: true,
    },

    company:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        requied : true,
        validate: [validator.isEmail , "provide a valid email"],
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        requied:true,
    },
    
});

export const Form = mongoose.model("Path-Finder",formSchema);