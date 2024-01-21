import styled from 'styled-components';
import { theme } from '../../themes';

export const FooterContainer = styled.footer`
  border-top: 1px solid ${theme.color.borderColor};
  margin-top: 50px;
  padding: 20px;
  /* text-align: center; */
  /* font-weight: bold; */

  small:last-child {
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    color: ${theme.color.textColor};
    font-weight: bold;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${theme.color.textColor};

  h4 {
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 40px;
  }
`;

export const FooterIconWrapper = styled.div``;

export const FooterIconLists = styled.ul`
  position: relative;
  display: flex;
  margin-top: 20px;

  li {
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 20px;
    transform: rotate(-30deg) skew(25deg);
    background: #ccc;
    transition: 0.5s;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 25px;
      transition: 0.5s;
    }

    :nth-child(1) span {
      background: #3b5999;
    }
    :nth-child(2) span {
      background: #55acee;
    }
    :nth-child(3) span {
      background: #dd4b39;
    }
    :nth-child(4) span {
      background: #0077b5;
    }

    :hover {
      span:nth-child(5) {
        transform: translate(40px, -40px);
        opacity: 1;
      }
      span:nth-child(4) {
        transform: translate(30px, -30px);
        opacity: 0.8;
      }
      span:nth-child(3) {
        transform: translate(20px, -20px);
        opacity: 0.6;
      }
      span:nth-child(2) {
        transform: translate(10px, -10px);
        opacity: 0.4;
      }
      span:nth-child(1) {
        transform: translate(0, 0);
        opacity: 0.2;
      }
    }
  }
`;
