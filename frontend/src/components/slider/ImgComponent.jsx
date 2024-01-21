import React from 'react';

export const ImgComponent = ({ src }) => {
  let imgStyles = {
    width: 100 + '%',
    height: 'auto',
  };
  return <img src={src} alt='img slider' style={imgStyles} />;
};
