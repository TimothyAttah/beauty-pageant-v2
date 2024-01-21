import React from 'react';
import * as Styles from './ModalStyles';
import { Feature } from '../feature/Feature';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBath, FaBed, FaMapMarkerAlt, FaToilet } from 'react-icons/fa';

export const Modal = ({ data, close }) => {
  const {
    subName,
    imgUrl,
    price,
    address,
    numOfRooms,
    numOfBathRooms,
    numOfToilet,
    details,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imgVariants = {
    open: { opacity: 1, y: '0vh' },
    closed: { opacity: 0, y: '-10vh' },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '10%' },
  };

  return (
    <Styles.ModalContainer
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      <Styles.ModalImage
        src={imgUrl}
        alt='real estate mansion'
        variants={imgVariants}
      />
      <Styles.ModalInfo variants={modalInfoVariants}>
        <Styles.ModalRow variants={modalRowVariants}>
          <Styles.ModalTitle>{subName}</Styles.ModalTitle>
        </Styles.ModalRow>
        <Styles.ModalRow variants={modalRowVariants}>
          <Styles.ModalPrice>{price}</Styles.ModalPrice>
        </Styles.ModalRow>
        <Styles.ModalRow variants={modalRowVariants}>
          <Styles.ModalAddress>
            <FaMapMarkerAlt />
            {address}
          </Styles.ModalAddress>
        </Styles.ModalRow>
        <Styles.ModalRow variants={modalRowVariants}>
          <Feature iconLabel={numOfRooms} Icon={<FaBed />} />
          <Feature iconLabel={numOfBathRooms} Icon={<FaBath />} />
          <Feature iconLabel={numOfToilet} Icon={<FaToilet />} />
        </Styles.ModalRow>
        <Styles.ModalDescriptionWrapper variants={modalRowVariants}>
          <Styles.ModalDescription>{details}</Styles.ModalDescription>
        </Styles.ModalDescriptionWrapper>
        <Styles.ModalCloseWrapper onClick={close} whileHover={{ scale: 1.2 }}>
          <IoCloseOutline />
        </Styles.ModalCloseWrapper>
      </Styles.ModalInfo>
    </Styles.ModalContainer>
  );
};
