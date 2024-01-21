import styled from 'styled-components';
import { theme } from '../../themes';

export const ButtonContainer = styled.div`
  a {
    display: inline-block;
    padding: 10px 28px;
    background-color: var(--main-color);
    color: ${({ theme }) => theme.color.textWhite};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.fsmd};
    text-transform: capitalize;
    line-height: 1.5;
    font-family: inherit;
    border: 2px solid transparent;
    border-radius: 30px;
    vertical-align: middle;
    user-select: none;
    transition: all 0.3s ease;

    :hover {
      background-color: transparent;
      color: var(--main-color);
      border-color: var(--main-color);
    }

    button {
      background-color: inherit;
      color: inherit;
    }
  }
`;

export const HeaderBtnContainer = styled.div`
  position: relative;
  /* width: 130px; */
  width: ${(props) => (props.width ? `${props.width}` : '130px')};
  height: 40px;
  /* margin: 20px; */

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: ${theme.color.bgLight};
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    overflow: hidden;
    transition: 0.5s;
    text-transform: capitalize;

    :hover {
      letter-spacing: 3px;
      ::before {
        transform: skewX(45deg) translateX(200%);
      }
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  }
`;
