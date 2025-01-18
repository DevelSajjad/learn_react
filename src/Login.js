import { useState } from "react";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    function validation(e)
    {
        e.preventDefault();
        if (email == '') {
            setEmailError('Email required');
        }

        if (password == '') {
            setPasswordError('Password required');
        } 
        
    }

    function emailHandler(e) {
        let val = e.target.value;
        if (val == '') {
            setEmailError('Email is required');
        }
    }

    function passwordHandler(e) {
        let val = e.target.value;
        if (val.length < 8) {
            setPasswordError('Password must greater than 8 or equal.');
        } else if (val.length >= 8) {
            setPasswordError('');
        }
    }
    return (
        <div>
            <form onSubmit={validation}>
                <div className="row">
                    <div className="col-md-6" >
                        <div class=" form-group mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={(e) => { emailHandler(e); setEmail(e.target.value);}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <strong class="text-danger"> {emailError} </strong>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class=" form-group mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control invalid" onChange={(e) => {passwordHandler(e); setPassword(e.target.value);}} id="exampleInputPassword1"/>
                            <strong class="text-danger"> {passwordError} </strong>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;