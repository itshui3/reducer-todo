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
    case 'MARK_COMPLETE':
      const copy = state.todoList.map(todo => {
        if (todo.id === payload) { // I need some way to pass a todo's ID into payload with type: 'MARK_COMPLETE'
          todo.completed = !todo.completed
        }
        return todo
      })
      
      return {
        ...state,
        todoList: copy
      }

    default:
      return state
  }

}