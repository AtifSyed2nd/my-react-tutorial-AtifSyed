import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const UseMemoHook = () => {
    const [data, setData] = useState()
    const [longName, setLongName] = useState('')
    const [count, setCount] = useState(1)

    // simple api fetching data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            setData(res.data);
            console.log("API is Called")
        })
    }, []);

    // a function which required a large computing to execute.
    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].name.length > longestName.length) {
                longestName = comments[i].name;
            }
        }

        console.log("This Was COMPUTED");
        return longestName;
    };

    // const getLongestName = findLongestName(data); // this will rerender each time the UI updates

    const getLongestName = useMemo(() => findLongestName(data), [data]); // useMemo hooks used to stored the value as caching so it dose not recalculate or recompute it. 

    /* What is the use of useMemo in React?
    useMemo is a powerful tool for optimizing the performance of your React applications by memoizing the result of expensive computations. By using useMemo effectively, you can prevent unnecessary re-renders and improve the overall responsiveness of your application. */

    return (
        <div>useMemoHook
            <center>
                <h1>{getLongestName}</h1>{/* this function will execute each time the UI Update */}

                {/*  Button is here just to update state and trigger rerendering of the component */}
                <button className='bg-gray-500 rounded p-2 m-5' onClick={() => setCount(count=> count + 1)}>Reload</button>
            </center>
        </div>
    )
}

export default UseMemoHook