import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  min-height: 600px;
  border-radius: 20px;
  position: relative;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;

  @media only screen {
    width: 90%;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  @media only screen and (min-width: 1281px) {
    width: 80%;
    height: 80%;
    max-width: 1800px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 30px;
    /* border: 2px solid red; */
  }
`;
export const ModalImage = styled(motion.img)`
  object-fit: cover;
  border-radius: 20px;

  @media only screen {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1281px) {
    width: calc(70% -10px);
    height: 100%;
  }
`;
export const ModalInfo = styled(motion.div)`
  background-color: #fff;
  color: black;
  display: flex;

  @media only screen {
    width: 100%;
    height: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 1281px) {
    width: calc(30% -10px);
    height: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ModalRow = styled(motion.div)`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  text-align: left;
`;

export const ModalTitle = styled(motion.h2)`
  font-size: 2rem;
  text-transform: capitalize;
`;
export const ModalPrice = styled(motion.span)`
  font-size: 3rem;
`;
export const ModalAddress = styled(motion.span)`
  font-size: 1.5rem;
  color: #737373;
  padding-left: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ModalDescriptionWrapper = styled(motion.div)`
  margin: 20px 0px;
  text-align: left;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ModalDescription = styled(motion.p)`
  color: #737373;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;
export const ModalCloseWrapper = styled(motion.button)`
  all: unset;
  position: absolute;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  @media only screen {
    right: -20px;
    top: -30px;

    svg {
      width: 35px;
      height: 35px;
      color: #cacaca;
    }
  }

  @media only screen and (min-width: 1281px) {
    right: 10px;
    top: 10px;

    svg {
      color: #737373;
    }
  }
`;
// export const ModalContainer = styled.div``;
// export const ModalContainer = styled.div``;
