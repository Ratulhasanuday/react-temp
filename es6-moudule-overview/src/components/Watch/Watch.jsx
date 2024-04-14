import React from 'react';

const Watch = ({watch}) => {
    const {name, price}=watch;
    return (
        <div>
            <h3>Watche: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;