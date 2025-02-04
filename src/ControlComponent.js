import React,{useState, useRef} from "react";

function ControlComponent()
{
    const[val, setVal] = useState('Sajjad');
    let input = useRef();
    function manupulate() {
        input.current.style.color="red"
        input.current.value="red"
    }
    return (
        <>
            <h1>Controll Component</h1>
            <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} />
        </>
    );
};

export default ControlComponent;