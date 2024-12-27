import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// importing useState 
import { useState } from 'react'

function App() {
  return (
   <>
    <SimpleuseState/>
    <TextComponent/>
    <TextShower/>
   </>
  )
}
function SimpleuseState(){
  const [variable, setVariable] = useState(0);
  const increaseVariable = () => {
    setVariable(variable+1);
  };

  const resetVariable = () => {
    setVariable(0);
  };

  const decreaseVariable = () => {
    setVariable(variable-1);
  };

  return (
   <div className='forIncrement' style={{border:"2px solid black", textAlign:'center'}}>
    <h5>This is Example of common useSate</h5>
    <p>{variable}</p>
    <button onClick={increaseVariable}>
      Increase the Variable
    </button>
    <button onClick={resetVariable}>
      Reset
    </button>
    <button onClick={decreaseVariable}>
      Decrease the Variable
    </button>
   </div>
  );
};

function TextComponent(){
  const [inputValue, setInputvalue] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value); //returns the changed value in console tab
    setInputvalue(event.target.value);
  };
  // function for making the textarea non interactable
  const handleTextAreaFocus = (event) => {
    event.preventDefault();
  }
  return(
    <>
    <div className='fortextbox' style={{border:'2px solid black', textAlign:'center',marginTop:'50px'}}>
      <h5>This is TextComponent</h5>
      {/* making a program that shows the text on another tag that you have typed on the input text */}
      <p>Enter Some text here:</p>
      <input type="text" onChange={handleInputChange} />
      <br />
      <p>The Text You have typed:</p>
      <textarea value={inputValue} readOnly={true} onFocus={handleTextAreaFocus}>
      </textarea>
    </div>
    </>
  );
};

function TextShower(){
  const [istextshown, setIstextshown] = useState(false);
 
  const [colorChange, setColorChange] = useState("black");

  const handleShower = (event) => {
    setIstextshown(!istextshown);
  };
  const changeColorTo = (color) => {
    setColorChange(color);
  };
  return(
    <div className='forTextshower'  style={{border:'2px solid black', textAlign:'center',marginTop:'50px'}}>
      <div style={{height:"30px"}}>
        <p hidden={istextshown} style={{color: colorChange}}>Hello,The text is shown</p>
      </div>
    <button onClick={handleShower} style={{margin:'10px 0px 10px 0px'}}>
      {istextshown ? "Show Text" : "Hide Text"}
    </button>
    <br/>
    <p>Click on the Buttons to change color</p>
      <div className="buttoncontainers"style={{margin:" 0px 0px 10px 0px"}}>
        <button style={{color:'red'}} onClick={() => {changeColorTo("red")}}> Red </button>
        <button style={{color:'blue'}} onClick={() => {changeColorTo("blue")}}>Blue</button>
        <button style={{color:'green'}} onClick={() => {changeColorTo("green")}}>Green</button>
        <button style={{color:'black'}} onClick={() => {changeColorTo("black")}}>Black</button>
      </div>
    </div>
  )
}
export default App