import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MonoyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money,setMoney]=useContext(MonoyContext);
    return (
        <div>
            <h2>Aunty   </h2>
            <section className="flex">

                <Cousin name={'mim'}></Cousin>
                <Cousin name={'munni'}></Cousin>
            </section>
            <p>money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;