import bycrpt from 'bcrypt';
import User from '../models/User.js';


export const deleteUser=async(req,res)=>{
    const user=await User.find({name:req.body.name})
    if(user==null){
        return res.status(400).send("Can't find user")
    }
    try{
        console.log(user)
        if(await bycrpt.compare(req.body.password,user[0].password)){
            console.log('Succeess')
           await User.deleteOne({name:req.body.name})
           res.send("Success")
        }
        else{
            console.log("Not Allowed")
        }
    }catch{
        console.log("pakaipa");
    }

}
