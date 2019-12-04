// Root Functionality
import React, { useReducer } from 'react';
// Reactstrap
import { Jumbotron } from 'reactstrap'
// Components
import Form from './components/Form'
import TodoList from './components/TodoList'
// Reducer
import { initialState, todoReducer } from '../reducers/reducer';
// Contexts
import StateContext from './contexts/StateContext'
import ActionsContext from './contexts/ActionsContext'

// Styles
import './App.css';

function App() {

  const [todo, dispatchTodo] = useReducer(todoReducer, initialState)

  return (

      <Jumbotron className='App'>
        <StateContext.Provider value={}>
          <ActionsContext.Provider>
            <Form />
            <TodoList />
          </ActionsContext.Provider>
        </StateContext.Provider>

      </Jumbotron>

  );
}

export default App;
