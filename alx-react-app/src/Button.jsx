import react from'react';
const app =()=>{
    const[details,setDetails]=useState({counter:0,name:""});
    function increse(){
        setDetails({counter:details.counter+1});
    }
    return(
        <div>
            <h1>{details.name}said count it up{details.counter}</h1>
            <button onClick={increse}>increase</button>
        </div>
    )
}
