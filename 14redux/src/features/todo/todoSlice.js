import { createSlice, nanoid } from '@reduxjs/toolkit';

// how does a store look in the initialstate , so it can be array or objects

const initialState = {
    todos: [{
            id:1,
            text:'Heloow'
        }
    ]
}

// slices are upper scale or unions of reducers
//  reducers are functionality 

const todoSlice = createSlice({
    // slices have name so name it properly
    // name is a default property
    name: 'todo',
    // this is initialstate of the slice , which is declared outside of the todoSlice , we just initialize or call it here
    initialState,
    // reducers contains properties and function
    reducers:{
        // In context Api we where just declaring the fucntion , we have not written the definiton
        // but here we write all the definiton in function

        // the fucntion get two thing one state and another action
        // state gives you the access if the initial state

        // action , is the action to get values
        addTodo: (state, action) => {
            // this is todo made , not gone inside state
            const todo = {
                id: nanoid(),
                text: action.payload  
            }
            // initializing state for todo
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // setting a newer todos which return the elements which doesnot match with id with the id of the text which is action.payload
            // the id which is not matched will be removed
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state,action) => {
            const { id, newText } = action.payload;
            // Find the index of the todo with the given id
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            // If the todo exists, update its text
            if (todoIndex !== -1) {
                state.todos[todoIndex].text = newText;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export { initialState, todoSlice };
export default todoSlice.reducer