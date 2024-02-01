import styled from 'styled-components';
import { theme } from '../../themes';

export const ContestantContainer = styled.div`
  width: 100%;
  padding: 100px 0;
`;

export const ContestantWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProfileCard = styled.div`
  width: 300px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  border-radius: 10px;
  color: ${theme.color.bgLight};

  svg {
    font-size: 60px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    color: ${theme.color.textColor2};
  }

  span {
    font-weight: bold;
  }
`;
