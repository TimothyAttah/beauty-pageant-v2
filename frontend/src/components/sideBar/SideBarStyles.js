import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBar = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.color.bgLight};
  color: ${({ theme }) => theme.color.textColor};
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* box-shadow: 12px 12px 12px rgba(0, 0, 0, #000); */
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  z-index: 99;
`;

export const SideBarNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.color.textColor2};
  margin-top: 80px;

  a.active {
    /* background: rgba(255, 255, 255, 0.05); */
    background: var(--main-color);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: ${({ theme }) => theme.color.textColor};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textDark};
    transition: 0.3s ease-in-out all;

    :hover {
      background-color: var(--main-color);
      color: ${({ theme }) => theme.color.textLight};
      border-radius: 30px;
    }
  }
`;

export const CloseSideBarIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textDark};
  font-size: 20px;

  svg {
    font-weight: normal;
    cursor: pointer;
  }
`;
