import  express  from "express";
import { CreateCategories, GetCategories } from "../Func.js";
const router = express.Router();

//Get All Categories
router.get('/api/categories' , (Req , Res) =>{
    return GetCategories(Req,Res);
})


//Creating categories
router.post('/api/create', (Req , Res) =>{
    return CreateCategories(Req,Res);
})



export default router;