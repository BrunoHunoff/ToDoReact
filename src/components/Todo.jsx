import React from 'react'


const todo = ({ todo }) => {
  return (
    <div className="todo">
        <div className='content'>
        <p>{todo.content}</p>
        <p className='category'>
            {todo.category}
        </p>
        </div>
        <div>
        <button className='complete'>Completar</button>
        <button className='remove'>x</button>
        </div>
    </div>
  )
}

export default todo