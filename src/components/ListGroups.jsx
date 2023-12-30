import React, { useEffect, useState } from 'react'
import ListItems from './ListItems'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Features/todo/TodoSlice'

const ListGroups = () => {

    const { todos, isLoading, isError } = useSelector(state => state.todos)

   

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    if (isLoading) {
        return <>
            <h1>Loading...</h1>
        </>
    }

    if (isError) {
        return <>
            <h1>something</h1>
        </>
    }
    if (!todos || todos.length === 0) {
        return <>
            <h1> No todos here</h1>
        </>

    }

    return (
        <>
            <ul className="list-group py-5">
                {
                    todos.map(todo => <ListItems todo={todo} key={todo.id} />)
                }
            </ul>
        </>
    )
}

export default ListGroups
