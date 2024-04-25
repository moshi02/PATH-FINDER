import Errorhandler from "../error/error.js";
import { Form } from "../model/formSchema.js";

export const sendForm = async(req,res,next) =>{
    const{name,company,email,phone,message} = req.body;
    if(! name || !company || !email || !phone || !message){
        return next(new Errorhandler("please fill full detials !", 400));

    }
    try{
        await Form.create({name,company,email,phone,message});
        res.status(200).json({
            success:true,
            message:"Message sent succesfully",
        });
    }catch(error){
        if(error.name==="validationError"){
            const validationError=Object.values(error.errors).map((err)=>err.message);
            return next(new Errorhandler(validationError.join(','), 400));
        }
        return next(error);
    }
};