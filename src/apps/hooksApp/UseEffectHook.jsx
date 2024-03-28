import React from 'react';
import axios from 'axios';

const UseEffectHook = () => {
    const [data, setData] = React.useState()
    const [count, setCount] = React.useState(1)
    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            setData(res.data[0]);
            console.log("API is Called")
        })
    }, [count]);
  return (
    <div>useEffectHook
        <center>
            <h1>{count}</h1>
            <button className='bg-gray-500 rounded' onClick={()=>setCount(count => count+1)}>Reload</button>
        </center>
    </div>
  )
}

export default UseEffectHook