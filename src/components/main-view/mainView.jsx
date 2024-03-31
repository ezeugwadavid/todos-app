import React from 'react'
import Todo from '../todo/todo'
import EditTodo from '../edit-todo/editTodo'
import { MainViewContainer } from './mainView.styles';

//this component combines both the todo component and edittodo component
const MainView = () => {
  return (
    <MainViewContainer>
    <div className="todo">
    <Todo />
    </div>
    <div className="edittodo">
    <EditTodo />
    </div>
    </MainViewContainer>
  )
}

export default MainView;