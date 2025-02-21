import react,{useState,useEffect} from 'react';
const app =()=>{
  const[counter,setCounter]=useState(0);
  const[otherCounter,setOtherCounter]=useState(4);
  function increse(){
    setCounter(counter+1);
  }
  function plus(){
    setOtherCounter(otherCounter+1);
  }
  useEffect(()=>{
    document.title=`${otherCounter} new messages!!`;
  },[otherCounter]);
  return(
    <div>
      <h1>my name is jeff and i like to click {counter} </h1>
      <p>i like to touch my keyboard</p>
      <input type="text" onChange={(e)=>e.target.value} />
      <button onClick ={increse}>
        click over here
      </button >
      <button onClick={plus}>
        click otherCounter
      </button>
      
    </div>
  )
}
export default app;