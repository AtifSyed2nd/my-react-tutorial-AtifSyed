import React from 'react'

const UseStateHook = () => {

  const [val, setVal] = React.useState(0)
  const [showText, setShowText] = React.useState(false);

  const increment = () => {
    setVal(perV => perV + 1); // preV will give the previous state of a variable
    setVal(perV => perV + 1);
    setShowText(perV => !perV);
  }
  return (
    <center>
      <h1>UseStateHook</h1>
      <h1>{val}</h1>
      <div className="">
        <center>
          <button className='bg-gray-600 text-white px-3 py-1 m-2 rounded-lg' onClick={() => { setVal(preVal => preVal - 1); setShowText(!showText) }}>-1</button>
          <button className='bg-gray-600 text-white px-3 py-1 m-2 rounded-lg' onClick={increment}>+2</button>
        </center>
        {showText && <h2>Showing Text</h2>}
      </div>
    </center>
  )
}

export default UseStateHook