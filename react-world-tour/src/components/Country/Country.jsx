
import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({ country, handlerVisitedCountries,  handlerVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisied = () => {
        setVisited(!visited)
    }
    // console.log(handlerVisitedCountries);
    const passWithParams = () => handlerVisitedCountries(country);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h2 style={{ color: visited ? 'Purple' : 'White' }}>coutntry :  {name.common}</h2>
            <img src={flags.png} alt="" />
            <p style={{ color: visited ? 'Purple' : 'White' }}>Population: {population}</p>
            <p style={{ color: visited ? 'Purple' : 'White' }}>Area: {area}</p>
            <p style={{ color: visited ? 'Purple' : 'White' }}><small>Code: {cca3}</small></p>
            <button onClick={() => handlerVisitedCountries(country.name.common)}>Mark Visited</button>
            <br />
            <br />
            {/* <button onClick={() => handlerVisitedFlags(country.flags.png)}>Add Flag</button> */}
            <button onClick={() => handlerVisitedFlags(country.flags[Object.keys(country.flags)[0]])}>Add Flag</button>

            <br />
            <br />
            <button onClick={handleVisied}>{visited ? 'Visited' : 'Going'}</button>
            <br />
            {visited ? 'I have visited this country' : 'I want to visit'}
            <hr />
            <CountryDetails>
            country={country}
            handlerVisitedCountries={handlerVisitedCountries}
            handlerVisitedFlags={handlerVisitedFlags}
            </CountryDetails>
        </div>
    );
};

export default Country;