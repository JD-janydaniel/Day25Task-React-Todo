import React from "react";

const Card = ({ todo, setTodo }) => {
  //deleteTodo function to delete the Todo
  const deleteTodo = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };
  //changeStatus function is use to change the status of the Todo
  const changeStatus = (id, newStatus) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: newStatus } : item
      )
    );
  };
  //editTodo function is use to edit the Todo
  const editTodo = (id) => {
    const newTitle = prompt("Enter new title: ");
    const newDescription = prompt("Enter new descrption: ");
    setTodo(
      todo.map((item) =>
        item.id === id
          ? { ...item, title: newTitle, description: newDescription }
          : item
      )
    );
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {todo.length === 0 ? (
            <div className="col-12 text-center fs-2">
              <p>Add your Todo here</p>
            </div>
          ) : (
            todo.map((element, index) => {
              return (
                <div key={element.id} className="col-lg-4 p-3">
                  <div className="card shadow overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">Name: {element.title}</h5>
                      <h5 className="card-title">
                        Description: {element.description}
                      </h5>
                      <p className="card-title d-flex flex-wrap ">
                        <h5>Status:</h5>
                        <select
                          className="ms-sm-2 rounded-5 border-success"
                          value={element.completed}
                          onChange={(e) =>
                            changeStatus(element.id, e.target.value)
                          }
                        >
                          <option value="notCompleted">Not Completed</option>
                          <option value="completed">Completed</option>
                        </select>
                      </p>
                      <div className="d-flex flex-wrap justify-content-end">
                        <a
                          href="#"
                          className="btn btn-warning ms-2 mt-2 "
                          onClick={() => editTodo(element.id)}
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger ms-2 mt-2 "
                          onClick={() => deleteTodo(element.id)}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
