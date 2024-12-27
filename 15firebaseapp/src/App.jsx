import React,{ useState, useEffect } from 'react';
import './App.css'
// import { getDatabase, ref, set } from "firebase/database"
import { app } from './firebase'
import Login from './pages/Login';
import Signup from './pages/Signup';
import GoogleSignUp from './pages/GoogleSignUp';
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// const db = getDatabase(app);
// const auth = getAuth(app); //making authorisation instance for firebaseAuthorization


// function App() { 

//   // const putdata = () => {
//   //   set(ref(db,"user/binayak"),{
//   //     id:1,
//   //     name:"Binayak",
//   //     age:21
//   //   })
//   // };

//     // const signUpUser = () => {
//     //   createUserWithEmailAndPassword(
//     //     auth,
//     //     "binayakunwor@gmail.com",
//     //     "passwordforbinayakemail"
//     //   ).then((value) => console.log(value));
//     // }
//   return (
//     <>
//       <h3>FirebaseApp first build</h3>
//       {/* <button onClick={putdata}>Put Data</button> */}
//       <h4>Sign-Up here</h4>
//       <Signup/>
//       <GoogleSignUp/>
//       <h4>Login Here</h4>
//       <Login/>
//     </>
//   )
// }

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null); // Update user state to null after sign-out
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <>
      <h3>FirebaseApp first build</h3>
      {user ? (
        <div>
          <h4>Welcome, {user.email}!</h4>
          <button onClick={handleSignOut}>Sign Out</button>
          {/* Display other authenticated content */}
        </div>
      ) : (
        <>
          <h4>Sign-Up here</h4>
          <Signup />
          <GoogleSignUp />
          <h4>Login Here</h4>
          <Login />
        </>
      )}
    </>
  );
}

export default App