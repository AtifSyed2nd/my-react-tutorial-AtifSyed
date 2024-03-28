import React from 'react'

// reducer is s function which is used to perform the action on state to change its original value
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { val: state.val + 1, showText: state.showText }
        case 'DECREMENT':
            return { val: state.val - 1, showText: state.showText }
        case 'ToggleShowText':
            return { val: state.val, showText: !state.showText }
        default:
            return state
    }
}

const UseReducerHook = () => {

    const [state, dispatch] = React.useReducer(reducer, { val: 0, showText: false })
    return (
        <center>
            <h1>UseReducerHook</h1>
            <h1>{state.val}</h1>
            <div className="">
                <center>
                    <button className='bg-gray-600 text-white px-3 py-1 m-2 rounded-lg'
                        onClick={() => {
                            dispatch({ type: "DECREMENT" });
                            dispatch({ type: 'ToggleShowText' })
                        }}
                    >-</button>
                    <button className='bg-gray-600 text-white px-3 py-1 m-2 rounded-lg'
                        onClick={() => {
                            dispatch({ type: "INCREMENT" });
                            dispatch({ type: 'ToggleShowText' })
                        }}
                    >+</button>
                </center>
                {state.showText && <h2>Showing Text</h2>}
            </div>
        </center>
    )
}

export default UseReducerHook