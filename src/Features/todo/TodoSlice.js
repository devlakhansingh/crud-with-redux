import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoService from "./TodoService";


const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    todos: [],
    message: "",
    edit: {
        todo: {},
        editmode: false
    }
}

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

        remove: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((item) => item._id !== action.payload)
            }
        },

        editTodo: (state, action) => {
            return {
                ...state,
                edit: { todo: action.payload, editmode: true }
            }
        }


    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.todos = action.payload
        })
        builder.addCase(getTodos.rejected, state => {
            state.isLoading = false
            state.isError = true
        })

        // create todo

        builder.addCase(saveTodo.pending, state => {
            state.isLoading = true
        })
        builder.addCase(saveTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.todos = [action.payload, ...state.todos]
        })
        builder.addCase(saveTodo.rejected, state => {
            state.isLoading = false
            state.isError = true
        })



        // deletetodo

        builder.addCase(DeleteTodo.pending, state => {
            state.isLoading = true
        })
        builder.addCase(DeleteTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        builder.addCase(DeleteTodo.rejected, state => {
            state.isLoading = false
            state.isError = true
        })

    }
})
export const { remove, editTodo } = TodoSlice.actions
export default TodoSlice.reducer

export const getTodos = createAsyncThunk("/FETCH/TODOS", async () => {
    try {
        return await TodoService.fetchTodos()
    } catch (error) {
        console.log(error)
    }
})

export const saveTodo = createAsyncThunk("CREATE/TODOS", async (formdata) => {
    try {
        return await TodoService.createTodo(formdata)
    } catch (error) {
        console.log(error)
    }
})


export const DeleteTodo = createAsyncThunk("DELETE/TODOS", async (id) => {
    try {
        await TodoService.removetodo(id)
    } catch (error) {

    }
})

export const updatetodo = createAsyncThunk("UPDATE/TODO", async (formdata) => {
    try {

        return await TodoService.updatetodos(formdata)
    } catch (error) {
        console.log(error)
    }
})