// Core Functionality
import React, { useContext } from 'react'
// App Components

// Context
import ActionsContext from '../contexts/ActionsContext'
import StateContext from '../contexts/StateContext'

function Form() {
  const dispatchTodo = useContext(ActionsContext)
  const todo = useContext(StateContext)
  // Form needs to be able to affect state and adjust both query as well as add 
  // to the Todo List

  const handleQuery = ev => {
    dispatchTodo({ type: 'SET_TODO_QUERY', payload: ev.target.value })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    dispatchTodo({ type: 'ADD_TODO', payload: {
      item: todo.query,
      completed: false,
      id: Date.now()
    }})
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleQuery}
        value={todo.query}
        placeholder='Todo Query'
      />
      <button>Submit</button>

    </form>

    </>
  )
}

export default Form;