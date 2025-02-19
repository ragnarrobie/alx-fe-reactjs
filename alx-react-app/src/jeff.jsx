import react from 'react';
const app = ()=>{
    const[counter,setcounter]=useState(0);
    const[name ,setName]=userName("");
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