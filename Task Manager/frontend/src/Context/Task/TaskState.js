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

  return (
    <taskContext.Provider value={{tasks , setTasks}}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
