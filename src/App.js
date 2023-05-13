import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';
import { useState } from 'react';
import Characters from './Components/Chararcter';

function App() {
  const [toggle, setToggle] =  useState(true);

  const handleToggle = ()=>{
    setToggle(!toggle)
  };

  return (
    <div className="App">
     <button onClick={handleToggle}>SHOW</button>
      {toggle && <Contador/>}

      <Characters/>
      
    </div>
  );
};

export default App;
