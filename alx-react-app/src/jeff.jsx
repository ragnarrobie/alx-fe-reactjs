import react,{useState,useEffect} from 'react';
const app = ()=>{
   const[counter,setCounter] = useState(0);
   useEffect(()=>{
    document.title= `${counter}new`;
   }, []);

    function increase(){
        setcounter(counter+1);
    }
    return(
        <div>
            <p>you clicked{counter}</p>
            <h1>clicked it{counter}times!!</h1>
            <input type="text" onChange={(e)=>(e.target.value)} />
        </div>
    )
}
export default jeff;