import React, { useState } from 'react';
import UserProfile from './UserProfile';


const App = () => {
  const [counter,setCounter] = useState(0);
  const[name,setName] = useState("jeff");
  function increaseCounter(){
    setCounter(counter+1);
  }
  return (
    <div><h1>Welcome to the User Profile App</h1>
      <input type='text' onChange={(e)=>setName(e.target.value)} />
      <h2>{name} has clicked {counter} times</h2>
  
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <p>you clicked me{counter}</p>
      <button onClick={increaseCounter}>
        click me
      </button>
    </div>
  );
};

export default App;