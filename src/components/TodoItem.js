import React, { useState } from 'react'

export const TodoItem = (props) => {

    const [isDone, setIsDone] = useState(false)

    const updateDone = () => {
        setIsDone(!isDone)
    }

    const onClick = () => {
        props.onChange(props.content)
    }

    return (

        <div className="mt-1"  >
            <div className="bg-white rounded p-3 bg-white flex justify-between">
                <div className="">
                    <input onClick={e => updateDone()} type="checkbox" className="w-4 cursor-pointer " ></input>
                    <span className={isDone ? 'line-through min-w-fit text-base text-gray-400 font-medium ml-3' : 'font-semibold min-w-fit text-base text-gray-600 ml-3'} >{props.content}</span>
                </div>
                <div className="">
                    <button onClick={e => onClick()} className="" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff6666" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

