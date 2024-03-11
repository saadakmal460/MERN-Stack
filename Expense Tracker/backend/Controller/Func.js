import express from "express";
import { categoriesModel, transactionModel } from "../Models/Model.js";


// POST:Getting all categories
export const GetCategories = async (Req, Res) => {
  try {
    const categories = await categoriesModel.find({});
    Res.status(200).json({ categories });
  } catch (error) {
    Res.status(404).json(error);
  }
};

//GET:Creating a category
export const CreateCategories = async (Req, Res) => {
  try {
    const category = await categoriesModel.create(Req.body);
    Res.status(201).json({ category });
  } catch (error) {
    Res.status(404).json(error);
  }
};

//POST:Creating Transaction
export const CreateTransactions = async (Req , Res)=>{
  try {
    if(!Req.body)
    {
      Res.status(400).json("No data was found"); 
    }
    const transaction = await transactionModel.create(Req.body);
    Res.status(201).json({ transaction });
  } catch (error) {
    Res.status(404).json(error);
  }
}

//GET:Getting Transactions
export const GetTransactions = async (Req, Res) => {
  try {
    const transaction = await transactionModel.find({});
    Res.status(200).json({ transaction });
  } catch (error) {
    Res.status(404).json(error);
  }
};


//DELETE:Deleting Transaction
export const DeleteTransaction = async (Req, Res) => {
  try {
    //Getting a single task and deleting
    const { id: transactionId } = Req.params;
    const transaction = await transactionModel.findOneAndDelete({ _id: transactionId });

    if (!transaction) {
      return Res.status(404).json({ msg: `No Transaction with id was found` });
    }

    Res.status(200).json({ transaction });
  } catch (error) {
    Res.status(500).json({ msg: error });
  }
};


export const GetLabels = async (Req, Res) => {
  transactionModel.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: 'type',
        foreignField: "type",
        as: "categories_info"
      }
    },
    {
      $unwind: "$categories_info"
    }
  ]).then(result => {
    if (result.length > 0) {
      const data = result[0]; // Take the first object from the array
      const responseObject = {
        _id: data._id,
        name: data.name,
        type: data.type,
        amount: data.amount,
        color: data.categories_info['color']
      };
      Res.json(responseObject); // Send the single object as response
    } else {
      Res.status(404).json({ message: "No data found" });
    }
  }).catch(err => {
    Res.status(400).json(err);
  });
}