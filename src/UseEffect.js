import { useEffect, useState } from "react";
function UseEffect() {
    const[increment, setIncrement] = useState(0);
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[errorName, setErrorName] = useState('');
    const[errorEmail, setErrorEmail] = useState('');
    const[conditionalCount, setConditionalCount] = useState(0);
    useEffect(()=> {
       console.warn('Without Conditional');
    });

    useEffect(()=> {
        console.warn('Conditional');
    }, [conditionalCount]);

    function formSubmit(e) {
        e.preventDefault();
        console.log(name, email);

        setConditionalCount(conditionalCount + 1);
    }

    function nameHandler(e) {
        let length = e.length;
        if (length < 5) {
            setErrorName('Enter your full name please.');
        } else {
            setErrorName('')
        }
    }
    function emailHandler(e) {
        let length = e.length;
        if (length < 5) {
            setErrorEmail('Enter your correct email.');
        } else {
            setErrorEmail('')
        }
    }
    return (
        <div>
            <h1>Use Effect</h1>
            <h1>Count: {increment}</h1>
            <button onClick={()=> setIncrement(increment + 1)} >Increment</button> 
            <br></br>
            <br></br>
            <br></br>
            <h1>Conditional Use Effect</h1>
            <h1>Conditional Use Effect Count Onsubmit: {conditionalCount}</h1>
            <form onSubmit={formSubmit}>
                <label>Name</label>
                <input type="text" onChange={(e)=> {setName(e.target.value); nameHandler(e.target.value) }} placeholder="Enter your name" />
                <br></br>
                <p>{errorName}</p>
                <br></br>
                <label>Email</label>
                <input type="email" onChange={(e)=> {setEmail(e.target.value); emailHandler(e.target.value) }} placeholder="Enter your email"/>
                <br></br>
                <p>{errorEmail}</p>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UseEffect;