import bycrpt from 'bcrypt';
import User from '../models/User.js';
export const Authenticate=async(req,res)=>{
    const user=await User.find({name:req.body.email})
    console.log(user);
    if(user==null){
        return res.status(400).send("Can't find user")
    }
    try{
        if(await bycrpt.compare(req.body.password,user[0].password)){
            console.log('Succeess')
        }
        else{
            console.log("Not Allowed")
        }
    }catch{
        console.log("There was an error during authentication");
    }

}