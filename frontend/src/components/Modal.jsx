import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { Backdrop } from './Backdrop';
// const modal = ReactDOM.createRoot(document.getElementById('root'));
// const modal = ReactDOM.createPortal(document)

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: 600px;
  width: 100%;
  height: auto;
  transition: 0.5s;
  padding: 20px;
  border-radius: 10px;
`;

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalContainer>{children}</ModalContainer>,
    </>,
    document.getElementById('modal'),
  );
};
