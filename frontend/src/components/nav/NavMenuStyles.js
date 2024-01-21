import styled from 'styled-components';

export const NavMenuContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 70px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumScreen}) {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;
    width: 100px;
    height: 70px;
    z-index: 1;

    /* a.active {
      color: var(--main-color);

      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: 10%;
        width: 80%;
        height: 5px;
        background: var(--main-color);
        transition: 0.5s;
        border-radius: 30px;
      }
    } */

    a.active {
      color: var(--main-color);
      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: 10%;
        width: 80%;
        height: 5px;
        /* background: white; */
        color: var(--main-color);
        transition: 0.5s;
        border-radius: 30px;
      }
    }

    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 500;
      padding: 0 10px;
      transition: 0.5s;
      gap: 5px;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: capitalize;
      /* font-size: ${({ theme }) => theme.fontSize.fsmd}; */
      color: ${({ theme }) => theme.color.textXDarkGray};
      transition: color 0.3s ease;
      :hover {
        color: var(--main-color);
      }

      svg {
        display: block;
      }

      /* ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: -3%;
        width: 0%;
        height: 5px;
        background: var(--main-color);
        transition: 0.5s;
        border-radius: 30px;
      } */

      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: -3%;
        width: 0%;
        height: 5px;
        background: var(--main-color);
        transition: 0.5s;
        border-radius: 30px;
      }

      :hover {
        ::after {
          width: 100%;
        }
      }

      /* .bg-reveal {
        ::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -3%;
          width: 0%;
          height: 5px;
          background: white;
          transition: 0.5s;
          border-radius: 30px;
        }
      } */
    }
  }
`;
