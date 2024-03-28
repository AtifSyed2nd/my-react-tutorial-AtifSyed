import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../app/featere/todo/todoSlice';


const Todos = () => {

  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className='mt-5 text-center text-3xl my-5'>Todos List</h1>
      <div>
        {todosList.map((todo) => (
          <div kye={todo.id} className="m-2 border-2 rounded-lg p-5 grid grid-cols-6">
            {/* <h1 className='text-lg py-2 text-center w-50' style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "white",
            }}> */}
            <h1 className={`text-lg py-2 col-span-4 ${todo.completed ? "text-gray-600 line-through" : "text-white"} `} >
              {todo.text}
            </h1>
            <button onClick={() => dispatch(toggleTodo(todo.id))} className='bg-blue-600 p-2 rounded'>{todo.completed ? "Completed" : "Complete"}{" "}</button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-red-600 p-2 rounded'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos