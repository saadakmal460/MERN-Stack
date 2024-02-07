import React, { useContext } from "react";
import tasksContext from "../Context/Task/TaskContext.js";
import TaskCards from "./TaskCards.js";
import AddTask from "./AddTask";

const Tasks = () => {
  const Context = useContext(tasksContext);
  const {tasks,} = Context;
  return (
    <>
      <AddTask /> 
      <div className="row my-3">
        <h2>My Tasks</h2>

        {tasks.map((task) => {
          return <TaskCards task={task} />;
        })}
      </div>
    </>
  );
};

export default Tasks;
