import { useState } from "react"

export default function Taskform({ addTask }) {
    const [inpValue, setInpValue] = useState('')
    const submitElement = e => {
        e.preventDefault()  //buttony beruma zavadskoy vichaki 
        addTask(inpValue)
        setInpValue('')

    }
    return (
        <form onSubmit={submitElement}>
            <input type="text" placeholder="Enter your task..." value={inpValue} onChange={(e) => {
                setInpValue(e.target.value)
            }} />
            <button>ADD</button>
        </form>
    )
}
