import React, { useState } from 'react'
import Axios from 'axios'
import './Execuseapi.css'
function Execuseapi() {

    const [excuse, setExecuse] = useState("");
    // https://excuser-three.vercel.app/v1/excuse/family/
    const getExecuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
            setExecuse(res.data[0].excuse);
        })
    };
  return ( 
    <div className='forExecuse'>
      <button onClick={() => getExecuse("party")}>Execuse for Party</button>
      <button onClick={() => getExecuse("family")}>Excecuse for Home</button>
      <button onClick={() => getExecuse("office")}>Execuse for Office</button>
      <p>{excuse}</p>
    </div>
  )
}

export default Execuseapi
