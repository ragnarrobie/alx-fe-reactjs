import React, { useState,useEffect } from 'react';
import UserProfile from './UserProfile';


const App = () => {
  const[details,setDetails]= useState({counter:0, name:""});
  useEffect(()=>{
    document.title = `${details.counter} new messages`;
  })
  function increaseCounter(){
    setDetails((prev)=>({
      ...prev,
      counter:prev.counter+1,
    }));

  }
  console.log(details);
  return (
    <div>
      <h1>Welcome to the User Profile App</h1>
      <input type='text' onChange={(e)=>e.target.value} />
      <h2>{details.name} has clicked {details.counter} times</h2>
  
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <p>you clicked me{details.counter}</p>
      <button onClick={increaseCounter}>
        click me
      </button>
    </div>
  );
};

export default App;