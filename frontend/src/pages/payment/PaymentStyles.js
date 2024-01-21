import styled from 'styled-components';
import { theme } from '../../themes';

export const PaymentContainer = styled.div`
  max-width: 800px;
  padding: 100px 0;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  margin: auto;
  h1,
  h2 {
    color: ${theme.color.textColor};
  }
`;

export const PaymentInput = styled.div`
  margin: 10px 0;
  label {
    display: inline-block;
    color: ${theme.color.textColor};
  }
  input {
    width: 100%;
    border-bottom: 1px solid ${theme.color.textColor};
    padding: 10px;
    background: inherit;
    color: ${theme.color.textColor};
  }
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 15px 20px;
    color: ${theme.color.textColor};
    border: 1px solid ${theme.color.textColor};
    background: inherit;
    border-radius: 5px;
  }
`;
