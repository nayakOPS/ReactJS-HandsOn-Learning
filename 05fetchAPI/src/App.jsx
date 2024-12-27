import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Axios from "axios"
import Ageapi from './Ageapi'
import Execuseapi from './Execuseapi'

// fetch API in JS

/*
 fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
    // opeations done here
    console.log(data);
});

.then() returns a promise, and grab the response and convert the JSON into JS Object
using .parse() ,after parsing the response then we grab that value will call that data

fetch does not have a parse method , instead use the json() method to parse the response body as JSON
*/

/*
,More easier Way to fetch API using library called AXIOS library
so install the package using the code : npm install axios
so to convert the fetch logic into axios import axios from axios library
*/
function App() {
  const [catfact, setCatfact] = useState("");
  // this will be called every time the component rerenders
  // so it will fetch the data unlimitly cause of the component lifecycle every time the data is being fetched there is difference in the Dom and again it fetches the data
  // So use useEffect hook
  // pass the dependency array for condition of changing the fact

  // fetching the cat fact 
  const [cutecat, setCutecat] = useState('');
  const generateimg = () => {
    Axios.get("https://cataas.com/cat").then((res) => {
        setCutecat(res.data)
    });
  };

  const generateFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
          setCatfact(res.data.fact)
          // .fact is done cause the fact is the property of the object so its
          // like Object.fact
      });
    };
  useEffect(() => {
    generateFact();
    },[]);
    // useEffect will runs twice cause it mounts one and then mounts it immediately after and mounts again last time
    // so to prevent it from running it twice remove the strictmode rendering 
  return (
    <>
    <h3>Fetching Api Example Programs:</h3>
      <div style={{border:"2px solid white", borderRadius:"15px"}}>
        <div className="cuteCat">
          <img src={cutecat} alt="The img of cat"  onLoad={generateimg}/>
        </div>
        <h4>/ Random Cat Fact Generator /</h4>
        <button onClick={generateFact}>Generate Cat Fact</button>
        {/* When i Just do it Infinetly fetches the data */}
        <p>{catfact}</p>
      </div>
      <br />
        <div className='forAgeAPi' style={{border:"2px solid white", borderRadius:"15px"}}>
          <h4>/ Guess the Age  /</h4>
          <Ageapi/>
        </div>
      <br />
        <div className="forExecuseApi" style={{border:"2px solid white", borderRadius:"15px"}}>
          <h4>/ Make Execuse for Party,Office,Home /</h4>
          <Execuseapi/>
        </div>
    </>
  )
}

export default App
