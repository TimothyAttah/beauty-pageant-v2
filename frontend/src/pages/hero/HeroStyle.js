import styled from 'styled-components';
import { theme } from '../../themes';

export const HeroContainer = styled.section`
  width: 100%;
  margin-top: 100px;
`;

export const HeroWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 150px; */
  position: relative;

  @media screen and (max-width: ${theme.screens.largeScreen}) {
    flex-direction: column;
    /* margin-top: 30px; */
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroHeader = styled.div`
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${theme.fontSize.fs2xl};
    color: ${theme.color.bgLight};
    margin-bottom: 10px;
  }

  small {
    display: inline-block;
    color: ${theme.color.textColor2};
    font-size: ${theme.fontSize.fslg};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${theme.fontSize.fs3xl};
    color: ${theme.color.bgLight};
    letter-spacing: 1px;
    margin: 10px 0 10px 0;

    text-shadow: 1px 1px 1px #fff, 1px 2px 1px #fff, 1px 3px 1px #022e66,
      1px 4px 1px #022e66, 1px 5px 1px #022e66, 1px 6px 1px #022e66,
      1px 7px 1px #022e66, 1px 8px 1px #022e66, 1px 9px 1px #022e66,
      1px 10px 1px #022e66, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }

  p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${theme.fontSize.fslg};
    color: ${theme.color.bgLight};
  }
`;
export const HeroSubheader = styled.h2``;
export const HeroLeftSide = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;
export const HeroMiddleSide = styled.div``;
export const HeroRightSide = styled.div`
  width: 600px;
  width: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  img {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const HeroInfo = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;

  @media screen and (max-width: ${theme.screens.largeScreen}) {
    flex-direction: column;
    margin-top: 30px;
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    gap: 40px;
  }
`;
export const HeroInfoFee = styled.div`
  width: 250px;
  height: 150px;
  background-color: ${theme.color.bgLight};
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  border-radius: 20px;
  padding: 10px;
  transform: Skew(25deg) rotate(-30deg);
  /* position: absolute;
  left: 70px;
  top: -20px; */

  div:first-child {
    width: 100%;
    height: 50px;
    background-color: ${theme.color.bodyBgColor};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.color.bgLight};
    font-size: ${theme.fontSize.fslg};
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fontSize.fs3xl};
    margin-top: 10px;
    letter-spacing: 2px;
    font-weight: bold;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    width: 180px;
    height: 80px;

    div:first-child {
      height: 25px;
      padding: 5px;
      border-radius: 10px;

      font-size: ${theme.fontSize.fsmd};
    }

    div:last-child {
      font-size: ${theme.fontSize.fslg};
      margin-top: 10px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;
export const HeroInfoHeader = styled.div`
  h4 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: ${theme.fontSize.fs2xl};
    color: ${theme.color.bgLight};
  }

  p {
    /* text-transform: uppercase; */
    font-weight: 400;
    font-size: ${theme.fontSize.fslg};
    color: ${theme.color.bgLight};
    transform: skewX(-20deg);
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    h4 {
      font-size: ${theme.fontSize.fslg};
    }

    p {
      font-size: ${theme.fontSize.fssm};
    }
  }
`;

export const HeroInfoPrizeBox = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  background-color: ${theme.color.textColor2};
  padding: 10px;
  border-radius: 20px;

  div {
    border-right: 1px solid black;
  }
  div:last-child {
    border: none;
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    max-width: 400px;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fssm};
    font-weight: bolder;
  }
`;

export const HeroInfoPrize = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  h3 {
    text-transform: capitalize;
    color: red;
  }

  p {
    font-weight: 500;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fssm};
    width: 80px;
    font-weight: bold;
  }
`;

export const HeroStarPrizes = styled.div`
  width: 100%;
  margin: 30px 0;
  text-align: center;
  h2 {
    text-transform: capitalize;
    color: ${theme.color.bgLight};
    margin-bottom: 10px;
  }
`;

export const HeroStarPrize = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  transition: 0.5s;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: 500;
    /* padding: 5px; */
    gap: 5px;
    font-weight: bold;

    svg {
      display: flex;
      align-items: center;
      margin-top: -2px;
      color: ${theme.color.textColor2};
      /* margin-left: 5px; */
    }
  }

  @media screen and (max-width: ${theme.screens.largeScreen}) {
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    max-width: 500px;
    width: 100%;
    gap: 10px;
  }
`;

export const HeroBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 70px auto 20px;
  @media screen and (max-width: ${theme.screens.smallScreen}) {
    flex-direction: column;
    gap: 10px;
  }
`;
