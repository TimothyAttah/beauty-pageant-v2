import styled, { css } from 'styled-components';
import { theme } from '../../themes';
import { motion } from 'framer-motion';

export const FormContainer = styled(motion.div)`
  /* margin: 100px 15px 50px 15px; */
  /* min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; */
  position: relative;
  max-width: 900px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  img {
    display: flex;
    margin: auto;
    margin-bottom: 20px;
  }
`;
export const FormHeader = styled(motion.div)`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    /* background-color: #4070f4; */
  }
`;
export const Form = styled(motion.form)`
  position: relative;
  margin-top: 16px;
  min-height: 490px;
  background-color: white;

  /* .form {
    position: absolute;
    background-color: white;
    transition: 0.3s ease;
  }

  .form.second {
    opacity: 0;
    pointer-events: none;
  }

  .form.setActive .form.second {
    opacity: 1;
    pointer-events: auto;
  }

  .form.setActive .form.first {
    opacity: 0;
    pointer-events: none;
  } */
`;
export const FormFirst = styled(motion.div)`
  /* z-index: 1; */

  ${(props) =>
    props.second &&
    css`
      /* z-index: 5; */
      /* background-color: white; */
      /* opacity: 1; */
    `}
`;
export const FormDetails = styled(motion.div)`
  /* margin-top: 30px; */
  ${(props) =>
    props.idDetails &&
    css`
      /* margin-top: 10px; */
    `}
`;
export const FormTitle = styled(motion.span)`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  color: #333;
`;
export const FormFields = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    /* text-align: center;
    justify-content: center; */
  }

  ${(props) =>
    props.login &&
    css`
      flex-direction: column;
    `}
`;
export const FormInputField = styled(motion.div)`
  display: flex;
  width: calc(100% / 3 - 15px);
  flex-direction: column;
  margin: 4px 0;

  label {
    font-size: 12px;
    font-weight: 500;
    color: #2e2e2e;
  }

  input {
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;
    :is(:focus, :valid) {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
    }
  }

  input[type='date'] {
    color: #707070;

    :valid {
      color: #333;
    }
  }

  ${(props) =>
    props.login &&
    css`
      width: 100%;
      input,
      label {
        width: 100%;
      }
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    width: 100%;
    input,
    label {
      width: 100%;
    }
  }
`;

export const NextBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #4070f4;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s linear;

  svg {
    margin: 0 6px;
  }

  :hover {
    background-color: #265df2;
  }

  ${(props) =>
    props.prevbtn &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const ButtonsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;

  button {
    margin-right: 14px;
  }
`;
