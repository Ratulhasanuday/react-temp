import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, divideTheFirstNumberByTheSecondNumber as divide, multiply } from '../../Ultils/calculate';
// import add from '../../Ultils/calculate';
const Sunglass = () => {
    const first=55;
    const second=199;
    const sum=add(first, second)
    const  mul=multiply(first,second)
    const divides=divide(first,second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};


export default Sunglass;