import React from 'react'

const Todos = ({ todos, onDelete }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => onDelete(todo.id)}>
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
            <p className="center"> You have no todo's left </p>
        )
    return (
        <div className="collection">
            {todoList}
        </div>
    )
}

export default Todos