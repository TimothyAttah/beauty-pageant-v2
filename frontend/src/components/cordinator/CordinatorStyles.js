import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const CordinatorContainer = styled.div`
  width: 100%;
  margin: auto;
`;
export const CordinatorWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  svg {
    font-size: 70px;
    color: goldenrod;
  }

  h1 {
    font-size: ${theme.fontSize.fs3xl};
    color: ${theme.color.textColor2};
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    h1 {
      font-size: 28px;
      text-align: center;
    }
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    flex-direction: column;

    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
`;

export const ImgBox = styled.div`
  /* width: 600px;
  height: 400px; */

  margin-bottom: 40px;

  img {
    width: 100%;
  }
`;
export const InfoBox = styled.div`
  /* border: 2px solid red; */
`;

export const InfoTitle = styled.div`
  display: flex;
  p img {
    display: inline-block;
    width: 50px;
  }

  p {
    font-size: 18px;
    color: ${theme.color.textLight};
    line-height: 25px;
    font-weight: bold;
  }

  ${(props) =>
    props.primary &&
    css`
      flex-direction: column;
      margin: 20px 0;
      margin-bottom: 50px;

      h4 {
        color: ${theme.color.textColor2};
        font-size: 30px;
      }

      p {
        color: ${theme.color.textLight};
        font-weight: normal;
        font-size: 16px;
      }
    `}

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    text-align: center;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 70px;
    display: block;
  }

  h2 {
    color: ${theme.color.textLight};
  }

  ${(props) =>
    props.primary &&
    css`
      img {
        width: 25px;
        display: block;
      }
    `}

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    flex-direction: column;
    text-align: center;
    h2 {
      font-size: 20px;
    }
  }
`;
// export const CordinatorContainer = styled.div``;
