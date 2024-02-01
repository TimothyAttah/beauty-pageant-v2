import styled from 'styled-components';
import { theme } from '../../themes';

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 100px 0;
`;

export const ProfileInfoSection = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  gap: 50px;
  box-shadow: 0px 10px 25px 20px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 10px;
`;

export const Header = styled.div`
  color: ${theme.color.textColor};
  svg {
    font-size: 80px;
  }
`;
export const SubHeader = styled.div`
  p {
    color: ${theme.color.textColor2};
  }

  span {
    display: inline-block;
    font-weight: bold;
  }
`;
