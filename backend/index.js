import express from 'express';
import cors from 'cors';
import signup from './routes/signup.js';
import Authenticate from './routes/login.js'
import { connectDB } from './config/db.js';
import deleteUser  from './routes/deletion.js';
import dotenv from 'dotenv';
import QRCode from 'qrcode';


dotenv.config()
const app=express();
connectDB()
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json())
app.use("/signup",signup);
app.use("/login",Authenticate);
app.use("/delete",deleteUser);
app.get('/',(req,res)=>{
    const url="MAGURA KUMBIRAI R2420053";
    QRCode.toDataURL(url,(err,qrCodeUrl)=>{
        if(err){
            res.status(500).send("Internal Server Error");
        }
        else{
            const codedImg=qrCodeUrl.toString('base64');
            //const codedImg=`data:image/png;base64, ${base64}`;
            res.send({image:codedImg});
        }
    })

})


app.listen(5002,()=>{
    console.log("Server started on PORT:5002");
})