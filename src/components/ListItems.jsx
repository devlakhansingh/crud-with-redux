import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo, editTodo, getTodos, remove } from '../Features/todo/TodoSlice'

const ListItems = ({ todo }) => {

const {isSuccess ,edit} = useSelector( state=> state.todos)

const dispatch = useDispatch()

const handledelete = (id)=>{
dispatch(DeleteTodo(id))
dispatch(remove(id))


}


const handleedit = (todo) => {

    dispatch(editTodo(todo))
}

    return (
        <>
            <li className="list-group-item">
                {todo.title}<br />
                {todo.description}
                <span>
                    <button onClick={()=>handledelete(todo._id)} className="btn btn-danger float-end mx-2">Delete</button>
                    <button onClick={()=>handleedit(todo)} className="btn btn-warning float-end">Edit</button>
                </span>
            </li>
        </>
    )
}

export default ListItems
