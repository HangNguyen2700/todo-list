//ToDo.js is one single row in our To Do List


const ToDo = ({todo, handleToggle}) => {

    const handleClick = e => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div
            id={todo.id}
            key={todo.id}
            name='todo'
            value='todo.id'
            onClick={handleClick}
            className={todo.complete ? 'strike' : ''}
        > 
            {todo.task} 
        </div>
    )
}

export default ToDo