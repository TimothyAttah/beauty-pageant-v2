import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
// import logo from '../../assets/logo1.png';
import * as Styles from './HeroStyle';
import { Button } from '../../components/button/HeaderButton';
import { FaStar } from 'react-icons/fa';
// import heroVideo from '../../assets/heroVic3/heroVideo (copy).mp4';
import heroVideo from './heroVic.mp4';

export const Hero = () => {
  window.addEventListener('error', (e) => {
    console.error(e.message);
    e.stopImmediatePropagation();
    e.preventDefault();
  });
  return (
    <Container>
      <Styles.HeroContainer>
        <Styles.HeroWrapper>
          <Styles.HeroMiddleSide>
            <Styles.HeroHeader>
              <FadeIn center delay={0.2} direction='right'>
                <h1>nica official nigeria ltd </h1>
              </FadeIn>
              <FadeIn center delay={0.4} direction='right'>
                <small>presents</small>
              </FadeIn>
              <FadeIn center delay={0.6} direction='right'>
                <h2>nigeria icon culture award</h2>
              </FadeIn>
              <FadeIn center delay={0.8} direction='right'>
                <p>the most prestigious culture award event in nigeria</p>
              </FadeIn>
            </Styles.HeroHeader>
          </Styles.HeroMiddleSide>
          <FadeIn delay={0.5} direction='left'>
            <Styles.HeroRightSide>
              <video src={heroVideo} controls></video>
            </Styles.HeroRightSide>
          </FadeIn>
        </Styles.HeroWrapper>
        <Styles.HeroInfo>
          <FadeIn delay={0.2} direction='right'>
            <Styles.HeroInfoFee>
              <div>Registration Fee</div>
              <div>N5,000</div>
            </Styles.HeroInfoFee>
          </FadeIn>
          <FadeIn delay={0.5} direction='right'>
            <Styles.HeroInfoHeader>
              <h4>A non-bikini pageant</h4>
              <p>Celebrating the Unique Beauty of African Culture</p>
            </Styles.HeroInfoHeader>
          </FadeIn>
          <FadeIn delay={0.8} direction='right'>
            <Styles.HeroInfoPrizeBox>
              <Styles.HeroInfoPrize>
                <p>Winner</p>
                <h3> N5M</h3>
              </Styles.HeroInfoPrize>
              <Styles.HeroInfoPrize>
                <p>1st Runner up</p>
                <h3> N3M</h3>
              </Styles.HeroInfoPrize>
              <Styles.HeroInfoPrize>
                <p>2nd Runner up</p>
                <h3> N1M</h3>
              </Styles.HeroInfoPrize>
            </Styles.HeroInfoPrizeBox>
          </FadeIn>
        </Styles.HeroInfo>
        <Styles.HeroStarPrizes>
          <h2>Star Prizes</h2>
          <Styles.HeroStarPrize>
            <li>
              <FaStar /> Official car
            </li>
            <li>
              <FaStar /> a trip to ghana
            </li>
            <li>
              <FaStar /> a cash price
            </li>
            <li>
              <FaStar /> one year movie endorsement
            </li>
            <li>
              <FaStar /> one year brand ambassador
            </li>
          </Styles.HeroStarPrize>
        </Styles.HeroStarPrizes>
        <Styles.HeroBtn>
          <Button to='/about' width='180px'>
            learn more
          </Button>
          <Button to='/register' width='280px'>
            register as a participate
          </Button>
        </Styles.HeroBtn>
      </Styles.HeroContainer>
    </Container>
  );
};
