import React, { Dispatch, SetStateAction } from 'react';

import CercleItem from './CircleItem';

import './CircleItems.scss';

interface CercleItemsInt {
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<any>>;
    data: Array<any>;
}

export default function CircleItems({ activeIndex, setActiveIndex, data }: CercleItemsInt) {
    
    const circleNavStyle = {
        transform: `rotate(-${(360 * activeIndex) / data.length}deg)`,
        transition: 'all 1s ease 0s',
    };

    return (
        <div style={circleNavStyle} className="circle-items">
            {data.map((item, index) => {
                return (
                    <CercleItem
                        setActiveItem={setActiveIndex}
                        key={index}
                        title={item.title}
                        index={index}
                        activeIndex={activeIndex}
                        quantityItems={data.length}
                        activeItem={index === activeIndex}
                    />
                );
            })}
        </div>
    );
}
