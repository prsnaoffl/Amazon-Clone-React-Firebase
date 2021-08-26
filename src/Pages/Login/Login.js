import React, { useState } from 'react';
import "./Login.css"; 
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';


const Login = () => {
    const history=useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((_)=>{
            history.push("/");
        }).catch((err)=>console.log(err))
    };

    const register=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            console.log(authUser);
            alert("User Account Created");
        }).catch((err)=>console.log(err))
    };

    return (
        <div className="login">
            <Link to="/">
             <img className="login_logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
               alt="logo" />
            </Link>

            <div className="login_container">
                <h2>Sign In</h2>
            <form>
                <h5>Email</h5>
                <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
                <h5>Password</h5>
                <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" className="login_signInButton" onClick={login}>
                    Submit
                </button>
            </form>
            <p>
                By sigin-In you agree to Amazon certifications of Use & Sale. Please
                see your privacy noticy,our cooking notice  and our Internet Based Ads 
                Notice. 
            </p>
            <button className="login_registerButton" onClick={register}>
              Create Your Amazon Button
            </button>
            </div>
        </div>
    )
}

export default Login
