import React, { useState, useEffect } from 'react'
import { TodoItem } from './TodoItem'
import { TodoInput } from './TodoInput'

export const TodoList = () => {

    useEffect(() => {
        document.title = 'Todo List';
    });

    const [todos, setTodos] = useState([])

    return (
        <div className="mt-4">
            <h1 className="mb-7 text-6xl font-semibold drop-shadow" >Todo List</h1>
            {/* Input */}
            <TodoInput onChange={(event) => { setTodos([...todos, { content: event }]) }} />
            {/* List of todos */}
            <div>
                {todos.map((item, index) => {
                    return <TodoItem onChange={(event) => {
                        // Delete item from array and update state
                        setTodos(current => current.filter(todo => { return todo.content !== event }))
                    }} content={item.content} key={index} />
                })}
            </div>
        </div>
    )
}
