import react,{useState,useEffect} from 'react';
const app =()=>{
  const[counter,setCounter]=useState(0);
  const[name,setName]=useState("");
  function increse(){
    setCounter(counter+1);
  }
  useEffect(()=>{
    document.title=`${counter} new messages!!`;
  },[])
  return(
    <div>
      <h1>my {name} is and i like to click {counter} </h1>
      <p>i like to touch my keyboard</p>
      <input type="text" onChange={(e)=>e.target.value} />
      <button onClick ={increse}>
        click over here
      </button >
      
    </div>
  )
}
export default app;