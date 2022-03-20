import { useState } from 'react'
import ToDo from './ToDo'

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('')

    const handleAdd = e => {
        e.preventDefault() //To the default action don't take place
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = e => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form style={{margin:'0px 0px 20px 0px'}} onSubmit={handleAdd}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                placeholder='Enter task...'
            />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm