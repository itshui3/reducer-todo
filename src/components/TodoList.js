import React from 'react'

// components
import TodoItem from './TodoItem'

// reducers
import { initialState, todoReducer } from '../reducers/reducer'

function TodoList() {
  // I need to receive a list of Todos from state
  const [todo, dispatchTodo] = React.useReducer(todoReducer, initialState)

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