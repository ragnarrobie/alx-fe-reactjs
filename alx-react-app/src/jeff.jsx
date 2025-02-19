import react,{useState,useEffect} from 'react';
const app = ()=>{
   const[details,setDetails] = useState({counter:0,name:""})
   useEffect(()=>{
    document.title= `${details.counter}new messages!!`;
   });

    function increase(){
        setcounter(counter+1);
    }
    return(
        <div>
            <p>you clicked{counter}</p>
            <h1>{details.name}clicked it{details.counter}times!!</h1>
            <input type="text" onChange={(e)=>(e.target.value)} />
        </div>
    )
}
export default jeff;