import react from 'react';
const app = ()=>{
   const[details,setDetails] = useState({counter:0,name:""})
    function increase(){
        setcounter(counter+1);
    }
    return(
        <div>
            <p>you clicked{counter}</p>
            <h1>{name}clicked it{counter}times!!</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}
export default jeff;