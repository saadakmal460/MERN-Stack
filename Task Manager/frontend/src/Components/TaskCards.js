import React, { useContext} from "react";
import tasksContext from "../Context/Task/TaskContext.js";

const TaskCards = (props) => {
  const { task } = props;
  const Context = useContext(tasksContext);
  const { DeleteTask } = Context;

  
  return (
    <>
      <div className="col-md-3 my-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{task.name}</h5>
            
            <i class="fa-solid fa-trash" onClick={()=> {DeleteTask(task._id)}}></i>
            <i class="fa-solid fa-pen-to-square mx-3"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCards;
