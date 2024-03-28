import React from 'react'


// document.getElementById() is replaced with useRef hook in react


const UseRefHook = () => {
    const inputRef = React.useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }

    const handleClear = () => {
        inputRef.current.value = '';
    }
    return (
        <div>UseRefHook
            <center >
                <div className='gap-5' >
                    <div className="gap-5 m-5">
                        <input className='focus:outline-red-500' type="text " ref={inputRef} />
                    </div>
                    <button className="bg-gray-500 rounded-xl p-2 m-2" onClick={handleClick}>Type</button>
                    <button className="bg-gray-500 rounded-xl p-2 m-2" onClick={handleClear}>Clear</button>
                </div>
            </center >
        </div>
    )
}

export default UseRefHook