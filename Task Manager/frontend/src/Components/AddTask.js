import React, { useContext, useState } from "react";
import tasksContext from "../Context/Task/TaskContext.js";


const AddTask = () => {
    const Context = useContext(tasksContext);
    const { AddTask } = Context;
    const [task , setTask] = useState({name:"" , completed:false});

    const handleClick = (e)=>{
        e.preventDefault();
        AddTask(task.name , task.completed);
    }

    const change = (e)=>{
        setTask({...task , [e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter you Task
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter Task"
            name = "name"
            onChange={change}
            
          />
        </div>
        <div>
        <label for="exampleFormControlInput1" class="form-label">
            Completed
          </label>

          <input
            class="form-check-input mx-5"
            type="checkbox"
            id="completed"
            value=""
            aria-label="..."
            name = "completed"
            onChange={change}
          />
        </div>
        <button type="button" class="btn btn-dark" onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default AddTask
