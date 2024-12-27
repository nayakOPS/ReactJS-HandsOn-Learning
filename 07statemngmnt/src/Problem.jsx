import React, { useState } from 'react'
import './Problem.css'
const TopComponent = () => {
    const [state, setState] = useState("This is the Props");
    return(
        <>
        <div style={{border:'2px solid black', height:'800px', width:'800px',margin:'auto'}}>
            <h5>I am Top Component</h5>
            <p>I am passing the props</p>
            <MiddleComponent state={state}/>
        </div>
        </>
    );
};
const MiddleComponent = ({state}) => {
    return(
        <>
        <div style={{border:'2px solid black', height:'600px', width:'600px', margin:'auto'}}>
            <h5>I am Middle Component</h5>
            <p>I dont need the prop , but i am passing it to bottom</p>
            <BottomComponent state={state}/>
        </div>
        </>
    );
};
const BottomComponent= ({state}) => {
    return(
        <>
        <div style={{border:'2px solid black', height:'400px', width:'400px', margin:'auto'}}>
            <h5>I am Bottom Component</h5>
            <p>"{state}"</p>
            <br /><p>That been passsed from top component to bottom through prop drilling</p>
        </div>
        </>
    );
};

// So, this is the whole problem, you have to drill the props from each component , from where also that the component dont need it 
// That'Why state Management is used
function Problem() {
  return (
    <>
    <TopComponent/>
    </>
  )
}

export default Problem