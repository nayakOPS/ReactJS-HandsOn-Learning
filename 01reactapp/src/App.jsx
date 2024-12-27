import './App.css'
import {List, ClientList, Clients} from './components/List'

function App() {
  return(
    <>
    <div className="helloworld">
      <h5>Hello World;</h5>
      <p>This is the details of the employee</p>
      <div className="employees">
      <Employee name="John" salary={90000} position="Associate SDE" Department="IT-Development" employeeStatus={false} />
      <Employee name="Cena" salary={200000} position="Senior DevOps Engineer" Department="IT-DevOps" employeeStatus={true}/>
      <Employee name="Binayak" salary={10000} position="Front-End Intern" Department="IT-Development" employeeStatus={true}/>
      </div>
      <hr />
      <p>This is the List of the Employee of our Org.<List/></p>
      <hr />
      <p>Our Clients are : <ClientList/></p>
    </div>
    </>
  )
}
const Employee = (props) =>{
  return(
    <>
    <div style={{display:"flex", alignItems:"center"}}>
        <p>{props.name}{" "}is a {props.position}{" "}Working at {props.Department}</p>
    </div>
      <p style={{marginTop:"-10px"}}>{props.name}Status:
      { props.employeeStatus ? 
      <h6 style={{color:"blue",marginTop:"0px"}}>Active</h6> : <h6 style={{color:"red",marginTop:"0px"}}>Leaved</h6> }</p>
    </>
  )
}
export default App