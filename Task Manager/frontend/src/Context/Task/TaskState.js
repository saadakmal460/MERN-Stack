import React from "react";
import { useState } from "react";
import taskContext from "./TaskContext";

const TaskState = (props) => {

  const host = "http://localhost:5000";
  const Tasks = [];

  const [tasks, setTasks] = useState(Tasks);


  const GetAllTasks = async()=>{
    const response = await fetch(`${host}/tasks/getAll`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
     
    });
    const json =  await response.json();
    console.log(json);

    const data = json.tasks;

    
    if(Array.isArray(data)) {
      setTasks(data);
    }
    
    //setTasks(json);
  }
  //Adding Task
  const AddTask = async (name, isCompleted) => {

    const response = await fetch(`${host}/tasks/create`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(name , isCompleted), // body data type must match "Content-Type" header
    });
    //const json =  response.json();

    const task = {
      _id: "65abce45fa56507e98a1e655",
      name: name,
      completed: isCompleted,
      __v: 0,
    };
    setTasks(tasks.concat(task));
  };

  //delete Task

  const DeleteTask = (id) => {
    console.log("deleting the task of id " + id);
    const newTask = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(newTask);
  };

  //edit note
  const EditTask = async (id, title, isCompleted) => {

    const response = await fetch(`${host}/tasks/update/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(title , isCompleted), // body data type must match "Content-Type" header
    });
    const json =  response.json();


    for (let index = 0; index < tasks.length; index++) {
      const element = tasks[index];
      if (element._id === id) {
        element.title = title;
        element.completed = isCompleted;
      }
    }
  };
  return (
    <taskContext.Provider
      value={{tasks, setTasks, AddTask, DeleteTask, EditTask , GetAllTasks }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
