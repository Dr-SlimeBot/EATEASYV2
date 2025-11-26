import User from '../models/User.js';
import bcrypt from 'bcrypt';
export const AddUser=async (req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        const newUser =new User({name:req.body.name,email:req.body.email,password:hashedPassword,regNo:req.body.regNo});
        await newUser.save();
        res.status(201).json({message:"successful"})
    }catch(error){
        console.error("Error",error)
    }

}