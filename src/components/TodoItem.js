import React, { useContext } from 'react';
import { Button, Card, Cardbody} from 'reactstrap';

// context
import ActionsContext from '../contexts/ActionsContext'
import StateContext from '../contexts/StateContext'
// styling
import './TodoItem.scss'

export default function TodoItem(props) {
  const todoDispatch = useContext(ActionsContext)
  const todo = useContext(StateContext)

  const handleClick = ev => {
    todoDispatch({ type: 'MARK_COMPLETE', payload: todo.todoList[props.id].id})
  }

  return (
    <li 
      onClick={handleClick}
      className={`${todo.todoList[props.id].completed ?
        'strikethrough' : null}`}
      >{props.todo.item}</li>
  )
}