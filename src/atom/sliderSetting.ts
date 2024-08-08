import { atom } from 'recoil';

export const slidetSettingState = atom({
    key: 'sliderSettingAtom',
    default: 
        {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            dotsClass: "button__bar",
            arrows: false
        }
});