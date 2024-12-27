import React from 'react'
export default function Todolist(props) {
  return (
    <div>
      <div style={{margin:'0px 0px 10px 0px', border:'2px solid white', borderRadius:'10px' }}>
                <div className='taskdiv' style={{display:'flex' , flexDirection:'row'}}>
                <h4 style={{marginLeft:'10px',color:props.completed ? '#3FFF00' : 'white'}}>{props.taskName}</h4>
                  <button style={{margin:'5px 5px 5px 10px'}}
                  // margin short hand code : top right bottom left
                  // in react when you wan to pass a function with parameters to a event you need to pass it through ans anonynomous fucntion
                  onClick={() => props.deleteTask(props.id)}
                  >X</button>
                  <button style={{margin:'5px 5px 5px 0px'}}
                   onClick={() => props.completeTask(props.id)}>
                    &#10003;
                  </button>
                </div> 
      </div>
    </div>
  )
}
