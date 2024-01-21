import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../themes';

export const FormContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: auto;
  margin: auto;
  background: ${theme.color.bgLight};
  border-radius: 20px;
  padding: 30px;

  /* @media screen and (max-width: ${theme.screens.smallScreen}) {
    padding: 30px 0;
  } */
`;
export const Form = styled(motion.form)``;
export const FormLogo = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  div {
    padding-bottom: 20px;
    h1 {
      color: ${theme.color.bodyBgColor};
      text-transform: uppercase;
      font-size: 56px;
    }
    small {
      display: block;
      color: ${theme.color.bodyBgColor};
      text-transform: uppercase;
      font-size: 10px;
      font-weight: bold;
      margin-top: -22px;
    }
  }
`;
export const FormHeader = styled.h2`
  font-size: ${theme.fontSize.fs2xl};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.bodyBgColor};
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    font-size: ${theme.fontSize.fsxl};
    margin: 20px;
  }
`;
export const InputBoxWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: dense;
  gap: 6px;

  ${(props) =>
    props.primary &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    grid-template-columns: 1fr 1fr;

    ${(props) =>
      props.primary &&
      css`
        grid-template-columns: 1fr 1fr;
      `}
  }
  @media screen and (max-width: ${theme.screens.smallScreen}) {
    grid-template-columns: 1fr;
  }
`;
export const InputBox = styled.div`
  margin: 5px 0;
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    background: ${theme.color.bgLight};
    color: ${theme.color.bodyBgColor};
    font-size: ${theme.fontSize.fsxl};
    border-bottom: 1px solid ${theme.color.bodyBgColor};
    transition: 0.5s;

    :focus,
    :valid {
      border: 1px solid ${theme.color.linkColor};
      border-radius: 5px;
    }

    ::placeholder {
      display: none;
    }
  }

  span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: ${theme.fontSize.fslg};
    color: ${theme.color.bodyBgColor};
    text-transform: capitalize;
    transition: 0.5s;
  }

  input:focus ~ span,
  input:valid ~ span {
    color: ${theme.color.linkColor};
    transform: translateX(10px) translateY(-7px);
    font-size: ${theme.fontSize.fssm};
    padding: 0 10px;
    background: ${theme.color.bgLight};
    border-left: 1px solid ${theme.color.linkColor};
    border-right: 1px solid ${theme.color.linkColor};
    letter-spacing: 1px;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    span {
      font-size: ${theme.fontSize.fssm};
      font-weight: bold;
    }
  }
`;
export const FormInfoContainer = styled.div``;
export const InfoTitle = styled.h5`
  font-weight: bold;
  font-size: ${theme.fontSize.fsmd};
  color: ${theme.color.textDark};
  padding: 20px 0 5px 0;
`;
export const InfoText = styled.small`
  text-align: center;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  h5 {
    font-weight: bold;
    font-size: ${theme.fontSize.fsmd};
    color: ${theme.color.textDark};
  }

  input {
    display: flex;
    width: 40px;
    height: 20px;
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}` : '130px')};
  height: 50px;
  margin: 50px auto;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSize.fslg};
    background: ${theme.color.bodyBgColor};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid ${theme.color.bodyBgColor};
    border-bottom: 1px solid ${theme.color.bodyBgColor};
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

// export const FormContainer = styled.div``;
