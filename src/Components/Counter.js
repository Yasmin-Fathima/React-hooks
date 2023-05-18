import React,{useState,useEffect} from 'react';

function Counter(){
    const [count,setCount]=useState(0);
    const [square,setSquare]=useState(0);

    useEffect(() => {
        setSquare(()=> count*count)
    },[count]);

    return(
        <div>
            <h1>Count: {count}</h1>
            <h2>Square of count value: {square}</h2>
            <button onClick={()=> setCount((c) => c+1)}>Increment Count</button>
        </div>

    )

}

export default Counter;