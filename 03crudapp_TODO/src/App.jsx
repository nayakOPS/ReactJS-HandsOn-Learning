import './App.css'
import { useState } from 'react'
import Todolist from './Todolist';
function App() {
  // making a datastructure for adding the list , Array will be suitable
  const [todolist, setTodolist] = useState([]);
  // making a state for tracking the changes in the todolist
  // it should keep track of what things are being written inside the input text tag
  const [newtask, setNewtask] = useState("");

  // for updating the change made in the task adder input area
  const handleChange = (event) => {
    setNewtask(event.target.value);
  }

  // for addingtask when the add task button is clicked
  // we cannot alter the useState initial variable directly,
  // need to do through the help of setter function which starts from set
  const addTask = (event) => {
    // so, we can't make the direct change in the array 
    // so, making a new array 

    // lets break down what i have done in the new array
    // new array is made called newTodoList and it is composed of two parameters :
    // ...todolist => uses spread operator cause we don't know the amount of parameters/or value we are getting through todolist
    //  newtask => accepting the newtask which are needed to be added in the newer version of todolist which is initialized as newTodoList

    // const newTodoList = [...todolist,newtask];
    // setTodolist(newTodoList);

    // optimized code
    // setTodolist([...todolist,newtask])

    // for id grabbing the id of the last element and adding 1 to it
    const task = {
      id: todolist.length === 0 ? 1 : todolist[(todolist.length-1)].id + 1,
      taskName: newtask,
      completed : false
    }
    setTodolist([...todolist,task])

  };

  // creating a function for deleting the task
  const deleteTask = (id) => {
    /*
        filter function working , going to do like this a sample program
        const arr = ["ram","shyam","hari","binayak"];
        const newArr = arr.filter((name) => {
          if(name === "binayak"){
               false for the element that I want to delete
            return false;
          }else{
            return true;
          }
        });
    */
  /*
    deleting the task that we have received as a parameter in the button onclick function handler
    the taskName parameter we are recieving is the parameter given as task through onclick fucntion handler

    deleting is done by comparing its name
    const newTodoList = todolist.filter((task) => {
      return task !== taskName;
      // returning false if task === taskName and deleting it , opposite for the condition of true
    });

    setTodolist(newTodoList);

    more optimized code
    setTodolist(todolist.filter((task) => task !== taskName))
    this code removes the same task that same name , so when two task have same name when deleting one other will be deleted

    so, we have to give each task a identifier a key to uniquely identify them 
    so, instead of storing each task in array we need to store them in object with an id
    tasklists={
      id:1,
      taskName: "do task1"
    }
    */
  //  Now, we are deleting task according to the id
   setTodolist(todolist.filter((task) => task.id !== id));
  }
  
  const completeTask = (id) => {
    setTodolist(todolist.map((task) =>{
        if(task.id === id){
          return{...task,completed:true};
        }else{
          return task;
        }
    }))
  };

  return (
    <>
    <h2>Today's TO-DO List</h2>
    <div className="rootDiv">
      <div className="forAddingTask">
        <input type="text" onChange={handleChange} />
        <br/><br/>
        <button onClick={addTask} style={{marginBottom:'10px'}}>Add Task</button>
      </div>
      <div className="forTodoList">
        {/* for iterating through the array of todolist */}
        {/* for each index of todolist the iterator will be task and we will be printing the iterator */}
        {todolist.map((task)=> {
          return (
            <>
              <Todolist 
                taskName={task.taskName}
                id={task.id}
                deleteTask ={deleteTask}
                completeTask ={completeTask}
                completed={task.completed}
              />
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}
export default App
