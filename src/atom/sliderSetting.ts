import { atom } from 'recoil';

export const sliderSettingState = atom({
  key: 'sliderSettingAtom',
  default: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dotsClass: 'button__bar',
    arrows: false,
  },
});
