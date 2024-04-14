import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])


 
const handlerVisitedCountries = country => {
    console.log('add this to your visited country');
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
}
const handlerVisitedFlags=flag=>{
    // console.log('Flag adding');
    // console.log(flag);
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
}
// const handlerVisitedFlags = flag => {
//     const newVisitedFlag = [...visitedFlags, flag];
//     setVisitedFlags(newVisitedFlag);
// }

useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
}, [])

// remove item frome an array in state 
// use filter to seletect all the elements except the one you want to remove
return (
    <div >
        <h3>Countries: {countries.length}</h3>
        <div>
            <h5>Visited Country {visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(country => <li>{country}</li>)
                }
                
            </ul>
        </div>
        <div className="flag-container">
            {
                visitedFlags.map((fleg, idx,)=> {
                    <img key={idx} src={fleg}></img>
                })
            }
        </div>
        <div className='country-container'>
            {
                countries.map(country => <Country
                    handlerVisitedCountries={handlerVisitedCountries}

                    handlerVisitedFlags={handlerVisitedFlags}

                    country={country}></Country>)
            }
        </div>
    </div>
);
}


