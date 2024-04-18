import express from "express";
import { categoriesModel, transactionModel } from "../Models/Model.js";

// GET:Getting all categories
export const GetCategories = async (Req, Res) => {
  try {
    const categories = await categoriesModel.find({});
    Res.status(200).json({ categories });
  } catch (error) {
    Res.status(404).json(error);
  }
};

//POST:Creating a category
export const CreateCategories = async (Req, Res) => {
  try {
    const category = await categoriesModel.create(Req.body);
    Res.status(201).json({ category });
  } catch (error) {
    Res.status(404).json(error);
  }
};

//POST:Creating Transaction
export const CreateTransactions = async (Req, Res) => {
  try {
    if (!Req.body) {
      Res.status(400).json("No data was found");
    }
    const transaction = await transactionModel.create(Req.body);
    Res.status(201).json({ transaction });
  } catch (error) {
    Res.status(404).json(error);
  }
};

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
    const transaction = await transactionModel.findOneAndDelete({
      _id: transactionId,
    });

    if (!transaction) {
      return Res.status(404).json({ msg: `No Transaction with id was found` });
    }

    Res.status(200).json({ transaction });
  } catch (error) {
    Res.status(500).json({ msg: error });
  }
};

export const GetLabels = async (Req, Res) => {
  try {
    const result = await transactionModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "categories_info",
        },
      },
      {
        $unwind: {
          path: "$categories_info",
          preserveNullAndEmptyArrays: true, // Preserve documents that don't match
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          type: 1,
          amount: 1,
          color: { $ifNull: ["$categories_info.color", ""] }, // Use a default color if no category is found
        },
      },
    ]);
    Res.json(result);
  } catch (error) {
    console.error("Error combining data:", error);
    Res.status(400).json("Lookup Collection Error");
  }
};

