import React,{useRef} from "react";
import ForwardRef from "./ForwarRef";

function UseRef()
{
    let input = useRef();
    
    function placeholder() {

        input.current.value="Hossain";
        input.current.style.color="red"
    }
    return (
        <>
            {/* <h2>Use Ref and Forward Ref</h2>
            <p> Manupulate DOM </p>
            <input type="text" placeholder="Enter Name" ref={input}/> */}
            <button onClick={placeholder} >Manipulate</button>
            <h2>Forward Ref</h2>
            <p>Its mean one dom to another dom manupulate</p>
            <ForwardRef ref={input}/>
        </>
    );
}

export default UseRef;