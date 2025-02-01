import { useState } from "react";


function InputForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [accept, setAccept] = useState('');
    function getFormData(e) {
        e.preventDefault();
        console.log(name, gender, accept);
    }

    function clearForm(e) {
        setName('');
        setGender('');
        setAccept('');
    }
    return (
        <div>
            <h1>{ name }</h1>
            <h1>Form</h1>
            <form onSubmit={getFormData}>
                <label>Name</label> <br/>
                <input placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
                <label>Gender</label> <br/>
                <select onChange={(e)=>setGender(e.target.value)}>
                    <option>Choose Gender</option>
                    <option selected={gender == "Male" ? "selected" : '' } >Male</option>
                    <option selected={gender == "Female" ? "selected" : '' } >Female</option>
                </select> 
                <br/> <br/>
                <input type="checkbox" checked={accept}  onChange={(e)=>setAccept(e.target.checked)} id='accept' /> <span for='accept'>Accept your agreement</span> <br/> <br/>

                <button type='submit'>Submit</button>
                <button onClick={clearForm}>Clear</button>
            </form>
        </div>
    );
}

export default InputForm;