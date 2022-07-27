import React, { useState } from 'react'

export const TodoInput = (props) => {

    const [text, setText] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.onChange(event.target.value)
            setText("")
        }
    }

    const handleChange = event => {
        setText(event.target.value);
    };

    return (
        <div className="mb-4 w-96" >
            <input onKeyDown={handleKeyDown} onChange={handleChange} value={text} autoComplete="off" placeholder="Add a new todo..." type="text" name="search" className="text-black  placeholder:italic placeholder:text-gray-500 block bg-white w-full border rounded py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" />
        </div>
    )
}
