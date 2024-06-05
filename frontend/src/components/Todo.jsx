import React from 'react'

const Todo = ({ todos }) => {
  
  return (
    <div>
        {todos.map((todos) => {
            return <div style={{
              border : "3px solid white",
              padding: 40,
              borderRadius: 10,
              margin: 10
          }}
            >
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <h3>{todos.completed == true ? "Completed" : "Mark as Completed"}</h3>
                </div>
        })}
    </div>
  )
}

export default Todo