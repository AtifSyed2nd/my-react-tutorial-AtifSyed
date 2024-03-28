import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/featere/todo/todoSlice'

const AddTodo = () => {

  const [input, setInput] = useState('')
  const [completed, setCompleted] = useState(false)

  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div>
      <center>
        <h1 className='text-3xl my-5'>Add Todo</h1>

        <div className="mb-3">
          <input type="text" className="border-2  " value={input} onChange={(e) => setInput(e.target.value)} id="exampleFormControlInput1" />
          <button onClick={addTodoHandler} className="bg-green-800 rounded-md px-2 py-1 m-5">Submit</button>
        </div>

      </center>
    </div>
  )
}

export default AddTodo