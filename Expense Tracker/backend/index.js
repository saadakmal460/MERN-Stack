import express from "express";
import cors from "cors";
import { Port , conString} from "./config.js";
import mongoose from "mongoose";
import router from "./Controller/Routes/routes.js";



const app = express();

app.use(express.json());

app.use(cors());

app.use("/tracks" , router)




mongoose
.connect(conString)
.then(()=>{

    console.log("Connected to DB");
    app.listen(Port , ()=>{
        console.log("App is Listening to port " + Port);
    
    })
})
.catch((error)=>{
    console.log(error);
})
