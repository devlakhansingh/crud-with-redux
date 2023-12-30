import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTodo, updatetodo } from '../Features/todo/TodoSlice'


const Form = () => {

    const dispatch = useDispatch()

    const { edit } = useSelector(state => state.todos)







    const [formdata, setformdata] = useState({
        title: "",
        description: ""
    })

    const { title, description } = formdata

    const Handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit.editmode) {
            dispatch(updatetodo({ id: edit.todo._id, title, description }))
        } else {
            dispatch(saveTodo(formdata))
            setformdata({
                title: "",
                description: ""
            })
        }

    }


    useEffect(() => {
        setformdata({
            title: edit.todo.title,
            description: edit.todo.description
        })
    }, [edit])

    return (
        <>
            <form onSubmit={handleSubmit} >

                <input value={title} name='title' onChange={Handlechange} placeholder='Enter text here' type="text" className="form-control" />
                <textarea value={description} name="description" onChange={Handlechange} placeholder='Enter description' id="" cols="10" rows="6" className="form-control my-3"></textarea>

                <button type='submit' className="btn btn-danger w-100">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form
