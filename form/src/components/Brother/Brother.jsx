import { useContext } from "react";
import { MonoyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const[money]=useContext(MonoyContext)
    return (
        <div>
        <h2>Brother</h2>            
        <p>Grandpa:{money}</p>
        </div>
    );
};

export default Brother;