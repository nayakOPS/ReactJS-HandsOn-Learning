import React from 'react'
import { useState, useEffect} from 'react';
import Axios from "axios";

function Ageapi() {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);

    // const fetchData = () => {
    //     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    //         setPredictedAge(res.data.age);
    //     });
    // }; 
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setPredictedAge(res.data.age);
            })
            .catch((error) => {
                if (error.response && error.response.status === 429) {
                    console.error('Too many requests. Please try again later.');
                    // Optionally, you can set an error state to display an error message in your UI.
                } else {
                    console.error('An error occurred:', error.message);
                    // Handle other types of errors if needed.
                }
            });
    };
    

  return (
    <>
    <div>
        <h4>Enter your Name and I will predict the Age</h4>
        <input placeholder="Your Name"
            onChange={(event) => {
                setName(event.target.value);
            }}
        />
        <button style={{marginLeft:"10px"}} onClick={fetchData}>Predict Age</button>
        <h4>Predicted Age : {predictedAge?.age}</h4>
    </div>
    </>
  )
}

export default Ageapi