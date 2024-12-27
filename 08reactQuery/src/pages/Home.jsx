import React from 'react'
import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'

function Home() {
  // so to replace data one can do data: catdata
  const {data, isLoading, refetch} = useQuery({
    querykey:['cat'],
    queryFn:() => {
     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  }
  })
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div>Home Page:</div>
    <p>Random Cat fact: {data?.fact}</p>
    <button onClick={refetch}>Update Fact</button>
    </>
  )
}

export default Home 