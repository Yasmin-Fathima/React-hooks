import React, { useReducer } from 'react';

const reducer = (state,action)=>{
    switch(action){
        case "add":
            return state+1;
        case "subtract":
            return state-1;
        case "reset":
            return state=0;
        default:
            throw new Error("Invalid Action");
    }
}

function AddSubtract(){
    const [count,dispatch]=useReducer(reducer,0);

    return(
        <div>
            <h3>Value : {count}</h3>
            <button onClick={()=> dispatch('add')}>Add</button>
            <button onClick={()=> dispatch('subtract')}>Subtract</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default AddSubtract;