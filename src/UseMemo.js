import React, { useState, useMemo } from "react";

function UseMemo() {
    const [count, countState] = useState(1);
    const [multiply, multiState] = useState(2); 

    const user=useMemo( function user() {
        console.log('Hello');
        return multiply + 1;
    }, [multiply])
   
    return(
        <>
            <h1>Use Memo</h1>
            <h2>Increment: {count}</h2>
            <h2>Multiply: {multiply}</h2>
            <h2> {user} </h2>
            <button onClick={()=> countState(count + 1)} >Increment</button>
            <button onClick={()=> multiState(multiply * 2)}> Multiply with 2</button>
        </>
    )
}

export default UseMemo;