import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../features/todo/todoSlice.js'

function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
        <h6>Todos</h6>
        {todos.map((todo) => {
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        })}
    </div>
  )
}

export default Todo