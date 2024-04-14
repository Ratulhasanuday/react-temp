import { useState } from "react"

export default function Counter() {
    const [count, setCount]=useState(50)
    console.log();
    const handleAdd=()=>{
        const newCount=count+2; 
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newReduce=count-1;
        setCount(newReduce)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Couneter: {count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}