import express from "express";
import { categoriesModel, transactionModel } from "../Models/Model.js";


//Getting all categories
export const GetCategories = async (Req, Res) => {
  try {
    const categories = await categoriesModel.find({});
    Res.status(200).json({ categories });
  } catch (error) {
    Res.status(404).json(error);
  }
};

//Creating a category
export const CreateCategories = async (Req, Res) => {
  try {
    const category = await categoriesModel.create(Req.body);
    Res.status(201).json({ category });
  } catch (error) {
    Res.status(404).json(error);
  }
};
