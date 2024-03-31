import React, { useState } from "react";
import { TodoContainer } from "./todo.styles";
import UserAvatar from "../../assets/useravatar.svg";
import Cup from "../../assets/cup.svg";
import TodoChecked from "../../assets/todochecked.svg";
import TodoUnChecked from "../../assets/todounchecked.svg";
import ActionButton from "../../assets/actionbutton.svg";

const Todo = () => {
  const todos = [
    {
      id: 1,
      checked: true,
      text: "Training at the Gym",
    },
    {
      id: 2,
      checked: false,
      text: "Play Paddle with friends",
    },
    {
      id: 3,
      checked: false,
      text: "Burger BBQ with family",
    },
  ];
  const [todo, setTodo] = useState(todos);
  const toggleChecked = () => {};
  return (
    <TodoContainer>
      <div className="todocontainer">
        <div className="todoheader">
          <img src={UserAvatar} alt="" />
          <div className="usercontent">
            <div className="welcome">Hello, Jhon</div>
            <div className="question">What are your plans for today</div>
          </div>
        </div>

        <div className="todonotification">
          <div className="leftnotification">
            <img src={Cup} alt="" />
            <div className="notificationtext">Go Pro Upgrade Now</div>
          </div>
          <div className="rightbadge">$1</div>
        </div>

        <div className="todobody">
          {todo.map((t) => {
            return (
              <div key={t.id} className="todocard">
                <div className="tododetails">
                  <img src={t.checked ? TodoChecked : TodoUnChecked} alt="" />
                  <div className="todotextblue">{t.text}</div>
                </div>
                <div className="editbutton">Edit</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottomsection">
        <img className="actionbutton" src={ActionButton} alt="" />
      </div>
    </TodoContainer>
  );
};

export default Todo;
