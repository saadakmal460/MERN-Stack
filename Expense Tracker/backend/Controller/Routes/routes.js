import  express  from "express";
import { CreateCategories, GetCategories , CreateTransactions , GetTransactions , DeleteTransaction , GetLabels } from "../Func.js";
const router = express.Router();

//Get All Categories
router.get('/api/categories' , (Req , Res) =>{
    return GetCategories(Req,Res);
})


//Creating categories
router.post('/api/create', (Req , Res) =>{
    return CreateCategories(Req,Res);
})

//Creating Transaction
router.post('/api/transaction', (Req , Res) =>{
    return CreateTransactions(Req,Res);
})

//Getting Transactions
router.get('/api/getTransaction' , (Req , Res) =>{
    return GetTransactions(Req,Res);
})

//Deleting Transaction
router.delete('/api/deleteTransaction/:id' , (Req , Res) =>{
    return DeleteTransaction(Req,Res);
})

router.get('/api/getLabel' , (Req , Res)=>{
    return GetLabels(Req,Res);
})

export default router;