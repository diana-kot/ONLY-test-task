import { useSwiper } from 'swiper/react';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { gsap } from 'gsap';

import { useWindowWidth } from '../../hooks/useWindowWidth';
interface CircleItemInt {
    index: number;
    title: number;
    activeIndex: number;
    quantityItems: number;
    activeItem: number | boolean;
    setActiveItem: Dispatch<SetStateAction<any>>;
}

export default function CircleItem({
    activeIndex,
    quantityItems,
    title,
    index,
    activeItem,
    setActiveItem,
}: CircleItemInt) {
    const swiper = useSwiper();
    const width = useWindowWidth();

    const circleRadius = (width > 768 ? 530 : width > 600 ? 400 : 300) / 2;
    const itemRadius = 56 / 2;

    const angle = (2 * Math.PI * (-index + 1)) / quantityItems;
    const xPosition = circleRadius * Math.cos(angle) - 1;
    const yPosition = circleRadius * Math.sin(angle);

    const windowCenterX = circleRadius; 
    const windowCenterY = circleRadius; 

    const circleItemStyle = {
        bottom: windowCenterY + yPosition - itemRadius + 'px', 
        left: windowCenterX + xPosition - itemRadius + 'px',
        transform: `rotate(${(360 * activeIndex) / quantityItems}deg)`,
    };

    const getActiveIndex = () => {
        swiper.slideTo(index);
        setActiveItem(index);
    };

    useEffect(() => {
        gsap.fromTo(
            '.slider-des__swiper',
            { opacity: 1, visibility: 'visible' },
            { duration: 0.3, opacity: 0, visibility: 'visible' },
        );
        setTimeout(
            () =>
                gsap.fromTo(
                    '.slider-des__swiper',
                    { opacity: 0, visibility: 'visible' },
                    { duration: 0.3, opacity: 1, visibility: 'visible' },
                ),
            800,
        );
    }, [activeIndex]);

    const setStyleTitle = () => {
        if (activeItem) {
            setTimeout(() => {
                return '';
            }, 100);
        } else {
            return 'circle-item__txt-notactive';
        }
    };

    return (
        <div style={circleItemStyle} className="circle-item item-circle">
            <div
                onClick={getActiveIndex}
                className={`circle-item__btn ${activeItem ? '' : 'circle-item__btn-notactive'}`}
            >
                {index + 1}
            </div>
            <div className={`circle-item__txt ${setStyleTitle()}`}>{title}</div>
        </div>
    );
}
