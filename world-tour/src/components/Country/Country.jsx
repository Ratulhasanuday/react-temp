
// import { useState } from 'react';
// import './Country.css'
// const Country = ({country,handlerVisitedCountries, handlerVisitedFlags}) => {
//     // console.log(country);
//     const {name,flags, population,area,cca3}=country;
//         const[visited, setVisited]=useState(false);
//         const  handleVisied=()=>{
//             setVisited(!visited)
//         }
//         // console.log(handlerVisitedCountries);
//         const passWithParams=()=>handlerVisitedCountries(country);
//     return (
//         <div className={`country ${visited ? 'visited':'non-visited'}`}>
//             <h2 style={{color:visited?'Purple':'White'}}>coutntry :  {name.common}</h2>
//             <img src={flags.png} alt="" />
//             <p style={{color:visited?'Purple':'White'}}>Population: {population}</p>
//             <p style={{color:visited?'Purple':'White'}}>Area: {area}</p>
//             <p style={{color:visited?'Purple':'White'}}><small>Code: {cca3}</small></p>
//             <button onClick={()=>handlerVisitedCountries(country.name.common)}>Mark Visited</button>
//             <br />
//             <button onClick={()=>handlerVisitedFlags(country.flags.png)}>Add Flag</button>
//             <br />
//             <button onClick={handleVisied}>{visited?'Visited':'Going'}</button>
//             {visited ? 'I have visited this country':'I want to visit'}
//         </div>
//     );
// };

// export default Country;