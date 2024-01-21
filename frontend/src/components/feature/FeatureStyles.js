import styled from 'styled-components';

export const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    /* color: #737373; */
    color: #fafafa;
  }

  :nth-child(1) div {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
  }

  :nth-child(2) div {
    background-color: ${({ theme }) => theme.colors.colorDanger};
  }

  :nth-child(3) div {
    background-color: ${({ theme }) => theme.colors.colorWarning};
  }
`;
export const FeatureCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* background-color: #f1f1f1; */
  background-color: ${({ theme }) => theme.colors.colorDanger};
  box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
export const FeatureIcon = styled.svg``;
export const FeatureLabel = styled.span`
  white-space: nowrap;
  color: #737373;
  /* color: #fafafa; */
  color: ${({ theme }) => theme.colors.colorSuccess};
  font-weight: bold;
`;
// export const FeatureContainer = styled.div``;
