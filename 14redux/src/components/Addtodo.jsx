import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../features/todo/todoSlice.js'
function Addtodo() {
    const [input, setInput] = useState(' ');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        // not letting the form to be directly submitted
        e.preventDefault();
        // calls to reducers need to be made from inside of the dispatch
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        Add Todo
      </button>
    </form>
  )
}

export default Addtodo