import React from "react";
import { useState } from "react";
import taskContext from "./TaskContext";

const TaskState = (props) => {
 const Tasks = [
  {
    "_id": "65aaba59dba1584e8e5f01db",
    "name": "test",
    "completed": true,
    "__v": 0
  },
  {
    "_id": "65abce45fa56507e98a1e655",
    "name": "testing2",
    "completed": false,
    "__v": 0
  }
]

const [tasks , setTasks] = useState(Tasks);

//Adding Notes
const AddTask = (name , isCompleted)=>{
  const task = {
    "_id": "65abce45fa56507e98a1e655",
    "name": name,
    "completed": isCompleted,
    "__v": 0
  };
  setTasks((tasks.concat(task)));
}

//delete Task

const DeleteTask = (id)=>{
  console.log("deleting the task of id " + id);
  const newTask = tasks.filter((task)=>{return task._id !== id});
  setTasks(newTask);
}

//edit note
const EditNote = ()=>{
  
}
  return (
    <taskContext.Provider value={{tasks , setTasks , AddTask , DeleteTask , EditNote}}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
