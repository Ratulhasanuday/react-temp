import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
export const AssetContext = createContext("Gold");
export const MonoyContext = createContext(1000);
const Grandpa = () => {
    const asset = "dimond";
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MonoyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="Gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Aunty ></Aunty>
                        <Uncle asset={asset}></Uncle>
                    </section>
                </AssetContext.Provider>
            </MonoyContext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * 1. Creat a context  and export it
 * 2.Add provider for the context with a valo .Valo could be anything
 * 3.useContext to access value in the context API
 */