import axios from "axios";

const API_URL = "/api/todo"
const fetchTodos = async () => {
    const res = await axios.get(API_URL)
    return res.data

}

const createTodo = async (formdata) => {
    const res = await axios.post(API_URL, formdata)
    return res.data
}

const removetodo = async (id) => {
    const res = await axios.delete(API_URL + `/${id}`)
    console.log(res.data)
}


const updatetodos = async (formdata) => {

    const { id, title, description } = formdata
    console.log(id)
    const res = await axios.put(API_URL + `/${id})`, title, description)
   console.log(res)


}

const TodoService = {
    fetchTodos,
    createTodo,
    removetodo,
    updatetodos
}

export default TodoService