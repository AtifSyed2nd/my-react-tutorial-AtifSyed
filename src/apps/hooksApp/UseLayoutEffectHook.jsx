import React from 'react'

// useLayoutEffect hook is called in the earlier stage of ui rendering and useEffect is called after the UI render
const UseLayoutEffectHook = () => {

    React.useLayoutEffectHook(() => {
        // it work exactly like useEffect but render before useEffect is called
    }, [])

    return (
        <div>UseLayoutEffectHook</div>
    )
}

export default UseLayoutEffectHook