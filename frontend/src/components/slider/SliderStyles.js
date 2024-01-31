import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const SliderContainer = styled.div`
  height: 700px;
  width: 800px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  padding-bottom: 50px;

  .active-anim {
    opacity: 1;
  }

  .active-dot {
    background: ${theme.color.bgLight};
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
`;
export const SliderImages = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;

  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    /* object-fit: cover; */
  }
`;

export const Slide = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  /* border: 2px solid ${theme.color.bgLight}; */
  /* background: rgba(255, 255, 255, 0.1); */
  background: ${theme.color.bodyBgColor};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 30px;
    color: ${theme.color.textLight};
    line-height: 41px;
  }

  :hover {
    /* background: rgba(255, 255, 255, 0.2); */
  }

  ${(props) =>
    props.left &&
    css`
      top: 50%;
      left: 20px;
      transform: translateY(-60%);
    `}
  ${(props) =>
    props.right &&
    css`
      top: 50%;
      right: 20px;
      transform: translateY(-60%);
    `}
`;

export const BtnSliders = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);

  span {
    height: 15px;
    width: 50px;
    border: 2px solid ${theme.color.bgLight};
    margin: 0 3px;
    cursor: pointer;

    :hover {
      background: ${theme.color.bgLight};
    }
  }
`;
