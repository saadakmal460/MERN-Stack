import React , {useContext} from "react";
import tasksContext from "../Context/Task/TaskContext.js";

const Home = () => {
  const Context = useContext(tasksContext);
  const {tasks , setTasks} = Context;

  return (
    <>
      <div className="container my-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter you Task
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Task"
          />
        </div>
        <div>
        <label for="exampleFormControlInput1" class="form-label">
            Completed
          </label>

          <input
            class="form-check-input mx-5"
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
          />
        </div>
        <button type="button" class="btn btn-dark">Add Task</button>
        {tasks.map((task)=>{
          return task.name;
        }
        )}
      </div>
    </>
  );
};

export default Home;
