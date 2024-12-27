import { configureStore } from '@reduxjs/toolkit'

// this store needs to know the knowledge of todoSlice

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer:todoReducer,
})