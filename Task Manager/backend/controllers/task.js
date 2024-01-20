import { Task } from "../model/taskModel.js";

export const getAllTasks = async (request, response) => {
  try {
    //Getting all the tasks
    const tasks = await Task.find({});
    response.status(200).json({ tasks });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

export const getSingleTasks = async (request, response) => {
  try {
    //Getting the task with id
    const { id: taskId } = request.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return response.status(404).json({ msg: `No task was found` });
    }

    response.status(200).json({ task });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

export const createTask = async (request, response) => {
  try {
    //Creating a task
    const task = await Task.create(request.body);
    response.status(201).json({ task });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

export const updateTasks = async (request, response) => {
  try {
    //Finding the tas by id
    const { id: taskId } = request.params;
    
    //Updating the task with request.body and then running validators
    const task = await Task.findOneAndUpdate({ _id: taskId }, request.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return response.status(404).json({ msg: `No Task with id was found` });
    }

    response.status(200).json({ task });

  } 
  
  catch (error) {
    response.status(500).json({ msg: error });
  }

};

export const deleteTask = async (request, response) => {
  try {
    //Getting a single task and deleting
    const { id: taskId } = request.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return response.status(404).json({ msg: `No Task with id was found` });
    }

    response.status(200).json({ task });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};
