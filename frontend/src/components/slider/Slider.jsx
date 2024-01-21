import React, { useState } from 'react';
import * as Styles from './SliderStyles';
import { RiArrowDropLeftFill, RiArrowDropRightFill } from 'react-icons/ri';

const Slider = ({ imgArr }) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (imgArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (imgArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Styles.SliderContainer>
      {imgArr.map((item, index) => (
        <Styles.Slide key={index} style={{ transform: `translateX(${x}%)` }}>
          {item}
        </Styles.Slide>
      ))}
      <button id='goLeft' onClick={goLeft}>
        <RiArrowDropLeftFill />
      </button>
      <button id='goRight' onClick={goRight}>
        <RiArrowDropRightFill />
      </button>
    </Styles.SliderContainer>
  );
};

export default Slider;
