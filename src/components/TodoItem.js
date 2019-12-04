import React from 'react';
import { Button, Card, Cardbody} from 'reactstrap';

export default function TodoItem(props) {

  return (
    <li>{props.todo.item}</li>
  )
}