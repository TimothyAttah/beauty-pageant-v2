import React from 'react';
import * as Styles from './ListingStyles';
import { Feature } from '../feature/Feature';
import { FaBath, FaBed, FaToilet, FaMapMarkerAlt } from 'react-icons/fa';

export const Listing = ({ data, open }) => {
  const { imgUrl, price, address, numOfRooms, numOfBathRooms, numOfToilet } =
    data;
  return (
    <Styles.ListingContainer
      onClick={open}
      whileHover={{
        scale: 1.1,
        transition: 'all 400ms ease',
        boxShadow: '0 3rem 3rem rgba(0, 0, 0, 0.3)',
      }}
    >
      <Styles.ListingContentWrapper>
        <Styles.ListingImageWrapper>
          <Styles.ListingImage src={imgUrl} alt='real estate mansion' />
        </Styles.ListingImageWrapper>
        <Styles.ListingDetails>
          {/* <Styles.ListingType>For Rent</Styles.ListingType> */}
          <Styles.ListingRow>
            <Styles.ListingPrice>{price}</Styles.ListingPrice>
          </Styles.ListingRow>
          <Styles.ListingRow>
            <FaMapMarkerAlt />
            <Styles.ListingAddress>{address}</Styles.ListingAddress>
          </Styles.ListingRow>
          <Styles.ListingRow>
            <Feature iconLabel={numOfRooms} Icon={<FaBed />} />
            <Feature iconLabel={numOfBathRooms} Icon={<FaBath />} />
            <Feature iconLabel={numOfToilet} Icon={<FaToilet />} />
          </Styles.ListingRow>
        </Styles.ListingDetails>
      </Styles.ListingContentWrapper>
    </Styles.ListingContainer>
  );
};
