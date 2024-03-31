import React from "react";
import { EditTodoContainer } from "./editTodo.styles";

const EditTodo = () => {
  return (
    <EditTodoContainer>
      <div className="editcontainer">
        <div className="editheader">Edit Task</div>
        <div className="editbody">
          <div className="inputcontainer">
            <div className="inputlabel">Task Name</div>
            <input className="input" type="text" value="Training at the Gym" />
          </div>
        </div>
      </div>
      <div className="bottombuttons">
        <div className="delete">Delete</div>
        <div className="save">Save</div>
      </div>
    </EditTodoContainer>
  );
};

export default EditTodo;
