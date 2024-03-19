import { useState } from 'react';
import './App.css';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() { 
  const [term, setTerm] = useState("");

  const handleChange = (e) =>{
    setTerm(e.target.value);
  }

  return (
    <div className="container">
      <h1>Find Number Game</h1>
      <p>Guess the number between 1 - 10</p>
      <input type='text' id='term' name='term' placeholder='Enter the number' onChange={handleChange}/>
      <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
