import styled from 'styled-components';
import { theme } from '../../themes';

export const MainHeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 10px 0;
  background-color: ${theme.color.bodyBgColor};
  /* background-color: red; */
  /* box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75); */

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    /* background-color: ${({ theme }) => theme.color.bgColor}; */
    /* background-color: var(--main-color); */
    box-shadow: ${({ theme }) => theme.shadow.mainShadow};
    z-index: -99;
    transform: translateY(calc(-100% - 10px));
    transition: transform 0.5s ease;
    box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);

    .bg-reveal {
      ::before {
        transform: translateY(0);
      }
    }
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 40px;
  }
  a {
  }
`;

export const HeaderNavWrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    a.active {
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      color: ${theme.color.bgLight};
    }

    a {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.color.textColor};
      font-weight: 600;
      font-size: ${theme.fontSize.fslg};
      transition: 0.5s;
      :hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 30px;
        color: ${theme.color.bgLight};
      }
    }
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: none;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  /* button {
    background-color: inherit;
    font-size: ${theme.fontSize.fslg};

    a {
      display: inline-block;
      color: ${theme.color.bgLight};
    }
  } */

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: none;
  }
`;

export const FaBarsBox = styled.div`
  color: ${theme.color.bgLight};
  font-size: ${theme.fontSize.fs2xl};
  display: none;
  transition: 0.5s all;
  cursor: pointer;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: flex;
  }
`;

export const Button = styled.div`
  position: relative;
  /* width: 130px; */
  width: ${(props) => (props.width ? `${props.width}` : '130px')};
  height: 40px;
  /* margin: 20px; */

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    /* background: ${theme.color.bodyBgColor}; */
    color: ${theme.color.bgLight};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
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
