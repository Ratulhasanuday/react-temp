// import { useEffect, useState } from 'react';
// import Country from '../Country/Country';
// import './Countries.css'
// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     const [visitedCountries, setVisitedCountries] = useState([])
 
// const handlerVisitedCountries = country => {
//     console.log('add this to your visited country');
//     console.log(country);
//     const newVisitedCountries = [...visitedCountries, country]
//     setVisitedCountries(newVisitedCountries)

// }
// useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
// }, [])

// return (
//     <div >
//         <h3>Countries: {countries.length}</h3>
//         <div>
//             <h5>Visited Country {visitedCountries.length}</h5>
//             <ul>
//                 {
//                     visitedCountries.map(country => <li key={country.cca3}>{country}</li>)
//                 }
//             </ul>
//         </div>

//         <div className='country-container'>
//             {
//                 countries.map(country => <Country
//                     handlerVisitedCountries={handlerVisitedCountries}
//                     country={country}></Country>)
//             }
//         </div>
//     </div>
// );
// }

import React, { useEffect, useState } from 'react';
import Countrie from './Countrie/Countrie';

const Countries = () => {
    const[countries, setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country=><Countrie key={country.cca3} country={country}></Countrie>)
            }
        </div>
    );
};

export default Countries;