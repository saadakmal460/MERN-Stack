export const getAllTasks = (request, response) => {
  return response.send("Task Manager, Get route");
};

export const getSingleTasks = (request, response) => {
  return response.send("Task Manager, Single task route");
};

export const createTask = (request, response) => {
  return response.json(request.body);
};

export const updateTasks = (request, response) => {
  return response.send("Task Manager, Update Tasks route");
};

export const deleteTask = (request, response) => {
  return response.send("Task Manager, Delete Tasks route");
};
