import React, { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'

const auth = getAuth(app);

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( value => alert("Success"));
    };

  return (
    <div className='signup-page'>
        <h2>Sign-Up</h2>
        <form action="">
            <label htmlFor="emailforsignup">Email</label>
            <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id='emailforSignup' 
                type="email"
                placeholder='Enter your Email'
             required/>
            <br />
            <label htmlFor="passwordforsignup">Password</label>
            <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id='passwordforsignup'
                type="password" 
                placeholder='Enter your Password' 
            required/>
        </form>
        <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default Signup