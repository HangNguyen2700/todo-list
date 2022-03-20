//ToDoList.js file is the container that holds all of our todos

import ToDo from './ToDo.js'

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map((todo) => { 
                return (
                    <ToDo 
                        todo={todo}
                        key={todo.id}
                        handleToggle={handleToggle}
                        handleFilter={handleFilter}
                    />
                    )
                })
            }

        <button style={{margin:20}} onClick={handleFilter}> Clear Completed</button>
        </div>
    )
}

export default ToDoList