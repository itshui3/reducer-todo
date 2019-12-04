import React, { useContext } from 'react'

// components
import TodoItem from './TodoItem'

// context
import StateContext from '../contexts/StateContext'

function TodoList() {
  const todo = useContext(StateContext)
  // I need to receive a list of Todos from state

  return (
    <ul>
      {
        todo.todoList.map((item, index) => (
          <TodoItem key={index} id={index} todo={item} />
        ))
      }
    </ul>
  )
}

export default TodoList;