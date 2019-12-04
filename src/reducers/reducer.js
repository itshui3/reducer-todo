export const initialState = {
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ],
  query: ''
}

export const todoReducer = (state, { type, payload }) => {
  switch(type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          payload
        ],
        query: ''
      }
    case 'SET_TODO_QUERY':
      return {
        ...state,
        query: payload
      }

    default:
      return state
  }

}