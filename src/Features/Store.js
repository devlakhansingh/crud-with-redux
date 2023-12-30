import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todo/TodoSlice"

const Store = configureStore({
    reducer: {
        todos: TodoReducer
    }
})

export default Store