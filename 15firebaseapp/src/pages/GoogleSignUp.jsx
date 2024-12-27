import React from 'react'
import { app } from '../firebase.js'
import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function GoogleSignUp() {
    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }
  return (
    <div>
        <h2>GoogleSignUp</h2>
        <button onClick={signUpWithGoogle}>Sign Up with Google</button>
    </div>
  )
}

export default GoogleSignUp