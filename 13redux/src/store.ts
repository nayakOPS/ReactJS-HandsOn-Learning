// for storing all the context or state 

// the configureStore will take the reducer function , what that will do is that
// it takes two arguments, action and previousState of the app , and returns the new state

import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { value : { username: " "}};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState.value;
        }
    }
});
const { login, logout } = userSlice.actions;

const store = configureStore({
    reducer:{
        user: userSlice.reducer,
    },
});

export { store,login,logout }