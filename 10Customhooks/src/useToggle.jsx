// this is a custom hook , which encapsulates the show and hide toggling feature

// hooks are meant to handle computational logic not UI logic

import { useState } from "react";

export const useToggle = (initialVal = false) => {
    const[state, setState] = useState(initialVal);

    const toggle = () => {
        setState((prev)=> !prev);
    };

    return [state, toggle];
    // state and toggle can be replace with any any name like in other default hooks

    // object ma return garyo bhaney chai parameter ko name change garna mildaina cause it the key name of the value of the obect
    
}