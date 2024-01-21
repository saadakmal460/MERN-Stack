import express from "express";
import { getAllTasks , getSingleTasks , deleteTask , updateTasks , createTask } from "../task.js";
const router = express.Router();


router.get('/getAll' , (request , response) =>{
    return getAllTasks(request , response);
})

router.get('/getSingle/:id' , (request , response)=>{
    return getSingleTasks(request , response);
})


router.delete('/delete/:id' , (request , response)=>{
    return deleteTask(request , response);
})

router.put('/update/:id' , (request , response)=>{
    return updateTasks(request , response);
})

router.post('/create' , (request , response)=>{
    return createTask(request , response);
})

export default router;


