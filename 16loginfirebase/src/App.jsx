import React, { useState } from 'react';
import { useFirebase } from './context/firebase';

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.signUpUserWithEmailAndPassword(email, password);
      setError(''); // Reset error state if sign-up succeeds
    } catch (error) {
      setError(error.message); // Set error message if sign-up fails
    }
  };

  return (
    <div className="App">
      <h2>Firebase</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter Your Password" 
        required 
      />
      <button onClick={handleSignUp}>SignUp</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
