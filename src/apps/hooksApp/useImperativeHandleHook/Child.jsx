import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Child = forwardRef((props, ref) => { // we wrap component in the forwardRef() so a parent component can pass a ref to the child component.
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        toggler() {
            setShow(!show);
        }
    }));

    return (
        <div>
            <h2>Child</h2>
            <button className='bg-gray-500 p-3 rounded m-2'>Child Button</button>
            {show ? <div className="m-2 border-2 border-gray-500">Show</div> : null}
        </div>
    )
})

export default Child