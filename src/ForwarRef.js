import React,{forwardRef} from "react";

function ForwardRef(props, ref) {
    console.log(ref);
    return (
        <>
            <h1>Forward Ref</h1>
            <input type="text" ref={ref} placeholder="Enter your name"/>
        </>
    );
};

export default forwardRef(ForwardRef);