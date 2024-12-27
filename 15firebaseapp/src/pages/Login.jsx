import React from 'react'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { app } from '../firebase'

const auth = getAuth(app);

function Login() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const LogInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => alert("Successfully Logged In"))
        .catch((err) => alert(err+"Something Error Happened"))
    }
  return (
    <div>
        <h2>Log-In</h2>
        <form action="">
            <label htmlFor="emailforlogin">Email</label>
            <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id='emailforlogin' 
                type="email"
                placeholder='Enter your Email'
             required/>
            <br />
            <label htmlFor="passwordforlogin">Password</label>
            <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id='passwordforlogin'
                type="password" 
                placeholder='Enter your Password' 
            required/>
        </form>
        <button onClick={LogInUser}>LogIn</button>
    </div>
  )
}

export default Login