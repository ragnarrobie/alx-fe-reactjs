import react,{useState,useEffect} from 'react';
const app = ()=> {
   const[details,setDetails]= useState({counter:0,name:""});
    useEffect(()=>{
        document.title =`${counter} new messages`;
    },[]);
    function increse(){
        setDetails(details.counter + 1);
    }
    return(
        <div>
            <p>my names is clicked {increse}</p>
            <h1>{name}is likely to be clicked {counter} times !!
            <input type="text" onChange={(e)=>e.target.value} />
            </h1>
            <button onClick = {increse}>
                click
                </button>
        </div>
    )
}
export default UserProfile;
