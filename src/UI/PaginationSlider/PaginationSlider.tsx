import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { gsap } from 'gsap';

import './PaginationSlider.scss';

interface PaginationSliderInt<T> {
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<any>>;
    itemsList: Array<T>;
}

export default function PaginationSlider<T>({ itemsList, activeIndex, setActiveIndex }: PaginationSliderInt<T>) {
    const swiper = useSwiper();

    function handleClickDoc(index: number) {
        if (index) {
            setActiveIndex(index);
            swiper.slideTo(index);
        }
    }

    useEffect(() => {
                gsap.fromTo(
                    ['.swiper-wrapper', '.slider-circle__name', '.slider-des__line'],
                    { opacity: 0, visibility: 'hidden', y:10},
                    { duration: 0.5, opacity: 1, visibility: 'visible', y:0},
                );
    }, [activeIndex]);

    return (
        <div className="pagination-slider">
            {itemsList &&
                itemsList.length > 0 &&
                itemsList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`pagination-slider__item ${
                                index === activeIndex ? 'pagination-slider__item_active' : ''
                            }`}
                            onClick={() => handleClickDoc(index)}
                        />
                    );
                })}
        </div>
    );
}
