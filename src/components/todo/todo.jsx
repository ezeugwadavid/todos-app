import React from "react";
import { TodoContainer } from "./todo.styles";
import UserAvatar from "../../assets/useravatar.svg";
import Cup from "../../assets/cup.svg";
import TodoChecked from "../../assets/todochecked.svg";
import TodoUnChecked from "../../assets/todounchecked.svg";
import ActionButton from "../../assets/actionbutton.svg";

const Todo = () => {
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
          <div className="todocard">
            <div className="tododetails">
              <img src={TodoChecked} alt="" />
              <div className="todotext">
                <s>Training at the Gym</s>
              </div>
            </div>
            <div className="editbutton">Edit</div>
          </div>

          <div className="todocard">
            <div className="tododetails">
              <img src={TodoUnChecked} alt="" />
              <div className="todotextblue">Training at the Gym</div>
            </div>
            <div className="editbutton">Edit</div>
          </div>

          <div className="todocard">
            <div className="tododetails">
              <img src={TodoUnChecked} alt="" />
              <div className="todotextblue">Burger BBQ with family</div>
            </div>
            <div className="editbutton">Edit</div>
          </div>
        </div>
      </div>

      <div className="bottomsection">
        <img className="actionbutton" src={ActionButton} alt="" />
      </div>
    </TodoContainer>
  );
};

export default Todo;
