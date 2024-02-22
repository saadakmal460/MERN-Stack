import mongoose from "mongoose";

const categories = mongoose.Schema({
    type:{type:String , default:"Investment"},
    color:{type:String , default:"red"}

})

const transactions = mongoose.Schema({
    name:{type:String , default:"Annonymous"},
    type:{type:String , default:"Investment"},
    amount:{type:Number},
    date:{type:Date , default:Date.now}

})

export const categoriesModel = mongoose.model('categories' , categories);
export const transactionModel = mongoose.model("transaction" , transactions); 