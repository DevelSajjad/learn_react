import React,{useRef} from "react";

function UseRef()
{
    let input = useRef();
    
    function placeholder() {
        console.warn(input);
        input.current.value="545";
        input.current.style.color="red"
    }
    return (
        <>
            <h2>Use Ref</h2>
            <p> Manupulate DOM </p>
            <input type="text" placeholder="Enter Name" ref={input}/>
            <button onClick={placeholder} >Manipulate</button>
        </>
    );
}

export default UseRef;