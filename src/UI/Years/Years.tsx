import { useEffect, useState } from 'react';

import './Years.scss';

interface YearsInt {
    from: number;
    to: number;
}

export default function Years({ from, to }: YearsInt) {
    const [currentYearsFrom, setCurrentYearsFrom] = useState(2000);
    const [currentYearsTo, setCurrentYearsTo] = useState(2000);

    useEffect(() => {
        if (currentYearsFrom > from) {
            setTimeout(() => setCurrentYearsFrom(currentYearsFrom - 1), 20);
        } 
        else if (currentYearsFrom < from) {
            setTimeout(() => setCurrentYearsFrom(currentYearsFrom + 1), 20);
        }

        if (currentYearsTo > to) {
            setTimeout(() => setCurrentYearsTo(currentYearsTo - 1), 20);
        } 
        else if (currentYearsTo < to) {
            setTimeout(() => setCurrentYearsTo(currentYearsTo + 1), 20);
        }
    }, [currentYearsFrom, from, currentYearsTo, to]);

    return (
        <div className="years years__wrapper">
            <div className="years__from">{currentYearsFrom}</div>
            <div className="years__to">{currentYearsTo}</div>
        </div>
    );
}
