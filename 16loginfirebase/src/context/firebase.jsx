// Making A context where there will be all firebase logic
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getDatabase,set,ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBS_9lys-NOfEtMoDHYVzKGOxdjQsXbTh4",
    authDomain: "fir-2react.firebaseapp.com",
    projectId: "fir-2react",
    storageBucket: "fir-2react.appspot.com",
    messagingSenderId: "779465485516",
    appId: "1:779465485516:web:9f329f0836c152d408e669",
    databaseURL:"https://fir-2react-default-rtdb.firebaseio.com/"
  };

const firebaseAPP = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseAPP);
const database = getDatabase(firebaseAPP);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseContext = createContext(null);
export const FirebaseProvider = (props) => {
    const signUpUserWithEmailAndPassword= (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    const putData = (key,data) => set(ref(database,key),data);

    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}