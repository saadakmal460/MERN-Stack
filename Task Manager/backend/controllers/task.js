import {Task} from "../model/taskModel.js"


export const getAllTasks = (request, response) => {
  return response.send("Task Manager, Get route");
};

export const getSingleTasks = (request, response) => {
  return response.send("Task Manager, Single task route");
};

export const createTask = async (request, response) => {
  const task = await Task.create(request.body);
  return response.status(201).json({task});
};

export const updateTasks = (request, response) => {
  return response.send("Task Manager, Update Tasks route");
};

export const deleteTask = (request, response) => {
  return response.send("Task Manager, Delete Tasks route");
};
