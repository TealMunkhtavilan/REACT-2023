import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import { useEffect, useRef, useState } from 'react';


function App() {
  // let name = "John"
  const [name, setName] = useState("liquid");
  const [inputValue, setInputValue] = useState("hello");
  const count = useRef(0);

  function handleClick()
  {
    // name = "Ben";
    setName("ice-frog");
  }
  function nameChanger()
  {
    console.log(count);
  }
  // console.log(count);
  console.log(name)

  function handleChange(e){
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    count.current = count.current + 1;
  });

  // },[name])
  // handleClick()
  // console.log(name);
  return (
    <div className="App">
      <header className="App-header">
      <input
        type="text"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={handleChange}
      />
      <h1>Render Count: {count.current}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{name?"sdf":"fsd"}</h1>
        <Button onClick = {handleClick}>fsd</Button>
      </header>
    </div>
  );
}

export default App;
