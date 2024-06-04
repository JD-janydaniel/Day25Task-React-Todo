import React, { useState } from "react";

const Inputs = ({ addTodo, setStatus, status, setFilter, filter }) => {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");
  //handleSubmit function is use to add a Todo
  const handleSubmit = () => {
    if (title !== "" && description !== "") {
      addTodo(title, description, status);
      setTitle("");
      setDescription("");
      setStatus("notCompleted");
    } else {
      alert("Enter the values in the input field");
    }
  };
  return (
    <>
      <div className="d-flex flex-wrap  justify-content-around fs-4 pb-4">
        <input
          type="text"
          value={title}
          id="name"
          placeholder="Todo Name"
          className="border border-success mt-3 w-auto rounded-4 "
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          id="description"
          placeholder="Todo Description"
          className="border border-success  mt-3 w-auto rounded-4"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-success btn-lg mt-3 "
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-between ms-3  ms-md-5 me-md-5">
        <h1>My Todos</h1>
        <h1 className="d-flex flex-wrap ">
          Status Filter:
          <select
            className="form-select ms-md-2 border-info w-auto rounded-5"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completedList">Completed</option>
            <option value="notCompletedList">Not Completed</option>
          </select>
        </h1>
      </div>
      <hr/>
    </>
  );
};

export default Inputs;
