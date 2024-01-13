import React from 'react'

export default function Task({ item, i, removeTask }) {
    return (
        <div className='item'>
            <span>{i + 1}.</span>
            <p>{item.task}</p>
            <button onClick={() => removeTask(item.id)}>X</button>
        </div>
    )
}




