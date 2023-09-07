import React from 'react';
import { useSwiper } from 'swiper/react';

import { ReactComponent as ArrowIconGray } from '../../assets/images/svg/arrow-right_dark.svg';
import { ReactComponent as ArrowIconGrayBlue } from '../../assets/images/svg/arrow-right_blue.svg';

import './ButtonSlider.scss';

type ButtonSliderTypes = 'right' | 'left';
type ButtonSizeTypes = 'small' | 'middle';
type ButtonColorTypes = 'transparent' | 'white';
type ButtonIconTypes = 'none' | 'gray' | 'blue';

interface ButtonSliderInt {
    direction?: ButtonSliderTypes;
    callback?: () => void;
    disabled?: boolean;
    className: string;
    classNameRight?: string;
    classNameLeft?: string;
    activeIndex?: number;
    icon?: ButtonIconTypes;
    setActiveIndex?: any;
    border?: boolean; //Включить border
    size?: ButtonSizeTypes; //Размер
    background?: ButtonColorTypes; //Включить background
    color?: ButtonColorTypes;
    mode?: string;
    buttonHide?: boolean
}

export default function ButtonSlider({
    mode = '',
    direction = 'right',
    disabled = false,
    className,
    icon = 'none',
    size = 'middle',
    border = true,
    background = 'transparent',
    setActiveIndex,
    buttonHide,
    classNameRight='',
    classNameLeft=''
}: ButtonSliderInt) {
    const swiper = useSwiper();
    const descSwiper = useSwiper();

    const handlePrevButtonClick = () => {
        swiper.slidePrev();
        setActiveIndex(swiper.activeIndex);
    };

    const handleNextButtonClick = () => {
        swiper.slideNext();
        setActiveIndex(swiper.activeIndex);
    };

    const setHandle = () => {
        if (mode === 'circle') {
            if (direction === 'right') {
                handleNextButtonClick();
            } else {
                handlePrevButtonClick();
            }
        } else if (mode === 'description') {
            if (direction === 'right') {
                descSwiper.slideNext();
            } else { 
                descSwiper.slidePrev();
            }
        }
    };

    return (
        <button
            type="button"
            className={`button-slider
            ${disabled ? 'button-slider_disabled' : ''} 
            ${`button-slider-${size}`} 
            ${border ? 'button-slider-border' : 'button-slider-border-none'} 
            ${`button-slider-${background}`} 
            ${buttonHide ? 'button-slider-hidden' : ''}
            ${direction === 'right' ? classNameRight : classNameLeft}
            ${className}
            `}
            onClick={() => setHandle()}
        >
            {icon === 'gray' && (
                <ArrowIconGray
                    className={`button-slider__icon
            button-slider__icon_direction_${direction} 
            `}
                />
            )}
            {icon === 'blue' && (
                <ArrowIconGrayBlue
                    className={`button-slider__icon button-slider__icon_direction_${direction} 
            `}
                />
            )}
        </button>
    );
}
