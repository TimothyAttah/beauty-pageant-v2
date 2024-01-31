import React, { useState } from 'react';
import * as Styles from './SliderStyles';

import sliderImg1 from '../../assets/IMG-20240130-WA0002.jpg';
import sliderImg2 from '../../assets/IMG-20240130-WA0003.jpg';
import sliderImg3 from '../../assets/IMG-20240130-WA0004.jpg';
import sliderImg4 from '../../assets/IMG-20240130-WA0005.jpg';
import sliderImg5 from '../../assets/IMG-20240130-WA0006.jpg';
import sliderImg6 from '../../assets/IMG-20240130-WA0007.jpg';
import sliderImg7 from '../../assets/IMG-20240130-WA0008.jpg';
import sliderImg8 from '../../assets/IMG-20240130-WA0009.jpg';
import sliderImg9 from '../../assets/IMG-20240130-WA0010.jpg';
import sliderImg10 from '../../assets/IMG-20240130-WA0011.jpg';
import sliderImg11 from '../../assets/IMG-20240130-WA0012.jpg';
import sliderImg12 from '../../assets/IMG-20240130-WA0013.jpg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const imgArr = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
  sliderImg8,
  sliderImg9,
  sliderImg10,
  sliderImg11,
  sliderImg12,
];

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== imgArr.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgArr.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgArr.length);
    }
  };

  const moveBtnSlide = (i) => {
    setSlideIndex(i);
  };

  return (
    <Styles.SliderContainer>
      <Styles.SliderWrapper>
        {imgArr.map((obj, index) => (
          <Styles.SliderImages
            key={index}
            className={slideIndex === index + 1 ? 'active-anim' : ''}
          >
            <img src={obj} alt='img' />
          </Styles.SliderImages>
        ))}

        <Styles.Slide left='true' onClick={() => prevSlide()}>
          <FaArrowLeft />
        </Styles.Slide>
        <Styles.Slide right='true' onClick={() => nextSlide()}>
          <FaArrowRight />
        </Styles.Slide>
      </Styles.SliderWrapper>

      <Styles.BtnSliders>
        {Array.from({ length: 12 }).map((item, i) => (
          <span
            key={i}
            className={slideIndex === i + 1 ? 'active-dot' : ''}
            onClick={() => moveBtnSlide(i + 1)}
          ></span>
        ))}
      </Styles.BtnSliders>
    </Styles.SliderContainer>
  );
};
