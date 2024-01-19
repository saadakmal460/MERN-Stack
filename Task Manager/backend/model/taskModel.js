import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true,
        trim:true,
        maxLength:[20]
    },

    completed:{
        type:Boolean,
        default:false
        
    }

})
export const Task  = mongoose.model("Task" , taskSchema);