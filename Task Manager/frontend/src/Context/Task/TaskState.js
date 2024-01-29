import React from "react";
import { useState } from "react";
import taskContext from "./TaskContext";

const TaskState = (props) => {
  const s1 = {
    name: "saad",
    class: "10",
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "saad2",
        class: "90",
      });
    }, 1000);
  };

  return (
    <taskContext.Provider value={{ state, update }}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
