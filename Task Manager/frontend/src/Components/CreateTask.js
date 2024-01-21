import React from "react";

export default function CreateTask() {
  return (
    <>
    <div className="mainHeading">
            Task Manager App
        </div>
    <div className="main">

        <div className="subHead">
            <h2 className="">
                Add Task
            </h2>
        </div>
        
      <div class="mb-3 textDiv">
        <label for="exampleFormControlInput1" class="form-label">
          Enter Task
        </label>
        <input
          type="email"
          className="form-control textBox"
          id="exampleFormControlInput1"
          placeholder="Enter your Task"
        />
      </div>
      <div class="form-check">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </div>
    </div>
    </>
  );
}
