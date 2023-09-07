import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonSlider from '../../UI/ButtonSlider/ButtonSlider';
import CircleItems from '../CircleItems/CircleItems';
import Years from '../../UI/Years/Years';
import SliderDes from '../SliderDes/SliderDes';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import { historicalGroups } from '../../assets/data/data';

import './SliderCircle.scss';

export default function SliderCircle() {
    const [historyDates, setHistoryDates] = useState(historicalGroups);
    const [activeIndex, setActiveIndex] = useState(0);

    const windowWidth = useWindowWidth();

    const SlIDER_SHOWN = 1;

    return (
        <div className="slider-circle">
            <div className="slider-circle__swiper">
                <Swiper
                    slidesPerView={SlIDER_SHOWN}
                    spaceBetween={50}
                    watchOverflow={true}
                    className="slider-circle__wrapper"
                >
                    <h2 className="slider-circle__title">Исторические даты</h2>
                    <div className="center">
                        <div className="slider-circle__navigate">
                            {windowWidth <= 580 ? (
                                <div className="slider-circle__name">{historyDates[activeIndex].title}</div>
                            ) : (
                                <CircleItems
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    data={historyDates}
                                />
                            )}
                            <Years from={historyDates[activeIndex].from} to={historyDates[activeIndex].to} />
                        </div>
                    </div>
                    {historyDates.map((item, index) => {
                        return (
                            <SwiperSlide className="slider-circle__slide slide-circle" key={index}>
                            </SwiperSlide>
                        );
                    })}
                    <div className="slider-circle__direction center">
                        <div className="slider-circle__numbers numbers-sircle">
                            <span className="numbers-sircle-all">
                                {activeIndex + 1 < 10 ? '0' + (activeIndex + 1) : activeIndex + 1}
                            </span>
                            /
                            <span className="numbers-sircle-current">
                                {historyDates.length < 10 ? '0' + historyDates.length : historyDates.length}
                            </span>
                        </div>
                        <div className="slider-circle__buttons">
                            <ButtonSlider
                                direction="left"
                                className="slider-circle-prev"
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                mode="circle"
                                size="middle"
                                icon="gray"
                                disabled={activeIndex === 0 ? true : false}
                                background="transparent"
                            />
                            <ButtonSlider
                                className="reviews-swiper-next"
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                mode="circle"
                                size="middle"
                                icon="gray"
                                background="transparent"
                                disabled={historyDates.length - activeIndex - SlIDER_SHOWN === 0 ? true : false}
                            />
                        </div>
                    </div>
                    <SliderDes
                        descDate={historyDates[activeIndex]}
                        activeIndex={activeIndex}
                        itemsList={historyDates}
                        setActiveIndex={setActiveIndex}
                    />
                </Swiper>
            </div>
        </div>
    );
}
