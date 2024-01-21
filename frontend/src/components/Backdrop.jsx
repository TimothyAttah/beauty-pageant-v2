import styled from 'styled-components';

const BackdropWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 500; */
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const Backdrop = ({ close }) => {
  return <BackdropWrapper onClick={close}></BackdropWrapper>;
};
