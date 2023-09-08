import React, { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { DateGroupInt } from '../../assets/data/data';

import ButtonSlider from '../../UI/ButtonSlider/ButtonSlider';
import PaginationSlider from '../../UI/PaginationSlider/PaginationSlider';

import './SliderDes.scss';

interface SliderDesInt {
    descDate: DateGroupInt;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<any>>;
    itemsList: any;
}

export default function SliderDes({ descDate, activeIndex, setActiveIndex, itemsList }: SliderDesInt) {
    const [isBeginningSlide, setIsBeginningSlide] = useState(true);
    const [isEndSlide, setIsEndSlide] = useState(false);

    const windowWidth = useWindowWidth();

    function handleSlideChange(isFirst: boolean, isLast: boolean) {
        setIsBeginningSlide(isFirst);
        setIsEndSlide(isLast);
    }

    return (
        <>
            <div className="slider-des__line"></div>
            <div className="slider-des">
                <div className="slider-des__swiper">
                    <Swiper
                        spaceBetween={windowWidth < 997 ? (windowWidth < 480 ? 25 : 70) : 80}
                        slidesPerView={windowWidth < 997 ? (windowWidth < 480 ? 1.5 : 2) : 3}
                        slidesPerGroup={1}
                        watchOverflow={true}
                        onSlideChange={(swiper) => handleSlideChange(swiper.isBeginning, swiper.isEnd)}
                        className="slider-des__wrapper"
                    >
                        {windowWidth <= 599 ? (
                            <></>
                        ) : (
                            <ButtonSlider
                                direction="left"
                                classNameLeft="slider-des-left"
                                className="slider-des-btn"
                                mode="description"
                                size="small"
                                background="white"
                                icon="blue"
                                border={false}
                                buttonHide={isBeginningSlide}
                            />
                        )}

                        <div className="slider-des__slides">
                            {descDate.dates.map((desc: any) => {
                                return (
                                    <SwiperSlide
                                        key={desc.year + '_' + desc.text.slice(0, 2)}
                                        className="slider-des__slide slide-desc"
                                    >
                                        <p className="slide-desc__year">{desc.year}</p>
                                        <div className="slide-desc__txt">{desc.text}</div>
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                        {windowWidth <= 599 ? (
                            <></>
                        ) : (
                            <ButtonSlider
                                direction="right"
                                classNameRight="slider-des-right"
                                className="slider-des-btn"
                                mode="description"
                                size="small"
                                background="white"
                                icon="blue"
                                border={false}
                                buttonHide={isEndSlide}
                            />
                        )}
                        {windowWidth <= 599 ? (
                            <PaginationSlider
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                itemsList={itemsList}
                            />
                        ) : null}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
