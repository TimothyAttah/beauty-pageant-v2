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
