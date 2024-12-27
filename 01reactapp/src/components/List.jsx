import React from 'react'

function List() {
  const emplyeeNames = ["Binayak","John","Ceamus","Hari"]
  return (
    <div className='employeesName'>
      {/* key means indes of the array */}
      {emplyeeNames.map((names,key) =>{
        // the key is passed in the tag because the error will not be coming through react
          return <p key={key}>{names}</p>
      })}
    </div>
  )
}
// component for rendering client lists
function ClientList(){
  const clientLists = [
    {name:"Nepal.Gov.Ministry-Of-Finance", budget:"70 Lakhs"},
    {name:"Daraz-Ecom.pvt.ltd", budget:"7 Lakhs"},
    {name:"India.Gov", budget:"7 crores"}
  ];
  return(
    <div>
      {clientLists.map((clients,key)=>{
        return <Clients name={clients.name} budget={clients.budget}/>
      })}
    </div>
  )
}
// component for client
const Clients = (props) => {
  return(
    <div>
      <p><i>Client:</i><b>{props.name}</b>, <i>Budget:</i><b>{props.budget}</b></p>
    </div>
  )
}
export {List, ClientList, Clients};
