import styled from 'styled-components';
import { theme } from '../../themes';

export const ContactSection = styled.section`
  padding: 60px 0;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 45px;
  font-size: ${theme.fontSize.fs3xl};
  text-transform: capitalize;
  margin: 0 0 15px;
`;
export const Title = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.fs2xl};
  font-weight: 400;
  text-transform: capitalize;
  color: ${theme.color.textColor2};
  margin: 0 0 12px;
  padding: 0 40px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 34px;
    background-color: ${theme.color.textColor2};
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;
export const SubTitle = styled.h2`
  font-size: ${theme.fontSize.fs3xl};
  text-transform: capitalize;
  margin-bottom: 80px;
  color: ${theme.color.textColor};

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fslg};
  }
`;

export const ContactInfo = styled.div`
  grid-column: span 5;

  div + div {
    margin-top: 20px;
    border-top: 1px solid ${theme.color.textColor};
  }
`;
export const ContactInfoItem = styled.div`
  position: relative;
  padding: 20px 0 20px 70px;

  h3 {
    margin: 0 0 10px;
    font-size: ${theme.fontSize.fsxl};
    font-weight: 500;
    text-transform: capitalize;
  }

  p:last-child {
    margin: 0;
  }
`;

export const SvgBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${theme.color.textColor2};
  box-shadow: ${theme.shadow.mainShadow};
  /* color: ${theme.color.textColor}; */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 20px;
`;
export const ContactForm = styled.div`
  grid-column: span 7;
`;

export const InputBox = styled.div`
  margin-bottom: 20px;

  input,
  textarea {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid ${theme.color.textColor};
    background-color: transparent;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: ${theme.color.textColor};
    padding: 0 20px;

    :focus {
      outline: 1px solid ${theme.color.textColor};
    }

    ::placeholder {
      color: ${theme.color.linkColor};
      opacity: 1; /* overide firefox default opacity */
    }
  }
  textarea {
    display: block;
    height: 150px;
    padding-top: 15px;
    resize: none;
  }
`;

export const BtnWrap = styled.div`
  button {
    display: inline-block;
    padding: 10px 28px;
    background-color: ${theme.color.textColor};
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
  }
`;
