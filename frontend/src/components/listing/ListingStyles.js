import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListingContainer = styled(motion.div)`
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  position: relative;
  margin: 20px;
  cursor: pointer;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.3);
  /* background-color: #fff; */
  background-color: ${({ theme }) => theme.colors.colorBackground2};
  border-radius: 10px;
  overflow: hidden;
  transition: 'all 400ms ease';

  ::before {
    content: '';
    display: block;
    padding-bottom: calc((5 / 4) * 100%);
  }
`;

export const ListingContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  background-color: ${({ theme }) => theme.colors.colorBackground2};

  border-radius: 10px;
  overflow: hidden;
`;
export const ListingImageWrapper = styled.div`
  width: 100%;
  height: 62%;
  overflow: hidden;
`;
export const ListingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ListingDetails = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0px 25px;
  position: relative;
`;

export const ListingType = styled.div`
  position: absolute;
  font-size: 0.8rem;
  right: 10px;
  top: 10px;
  background-color: rgb(223, 247, 255);
  color: black;

  padding: 5px 10px;
  border-radius: 15px;
`;
export const ListingRow = styled.div`
  margin: 6px 0px;
  display: flex;
  align-items: center;
`;
export const ListingPrice = styled.span`
  font-size: 1rem;
  /* color: black; */
  color: #fafafa;
  font-weight: bold;
`;
export const ListingAddress = styled.span`
  /* color: #737373; */
  color: #fafafa;
  font-size: 0.8rem;
  padding-left: 5px;
`;

// export const ListingContentWrapper = styled.div``;
// export const ListingContentWrapper = styled.div``;
// export const ListingContentWrapper = styled.div``;
// export const ListingContentWrapper = styled.div``;
