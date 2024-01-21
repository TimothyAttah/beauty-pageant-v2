import styled from 'styled-components';

export const SliderContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  max-width: 800px;
  width: 100%;
  height: 70vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* background: black; */
  margin: auto;

  button {
    position: absolute;
    top: 50%;
    background: none;
    transform: translateY(-50%);
    width: 10%;
    height: auto;
    background: none;
    border: none;
    transition: 0.5s;
    display: flex;
    align-items: center;
    svg {
      font-size: 100px;
    }
    :hover {
      background: rgba(0, 0, 0, 0.356);
      svg {
        color: white;
      }
    }
  }

  #goLeft {
    left: 0;
  }

  #goRight {
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    margin-top: -100px;
    /* margin-bottom: 40px; */
  }
`;
export const Slide = styled.div`
  /* position: relative; */
  min-width: 100%;
  width: 100%;
  /* height: 100%; */
  transition: 0.5s;
  /* border: 2px solid blue; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
