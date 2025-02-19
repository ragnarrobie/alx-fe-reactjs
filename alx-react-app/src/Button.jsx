import react,{useState} from 'react';
function counter(){
const[count,setCount] = useState(0);

return(
    <div>
        <p>you clicked {count}</p>
        <button onClick={()=>setCount(count +1) } >
            click me
        </button>
    </div>
)
}
export default Button;
