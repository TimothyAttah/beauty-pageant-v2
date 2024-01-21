import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyle';
import { Container } from '../../styles/globalStyles';
import { FaCar, FaPlane, FaVideo, FaWhatsapp } from 'react-icons/fa';

export const About = () => {
  return (
    <Styles.AboutContainer id='about'>
      <Container>
        <Styles.SectionTitle>
          <Styles.AboutTitle>about us</Styles.AboutTitle>
          <FadeIn delay={0.4} direction='left'>
            <Styles.AboutText>
              Welcome to our prestigious pageantry competition, where beauty,
              talent, and grace converge to celebrate the essence of
              individuality and empowerment. Our pageant is a platform that
              showcases the diverse strengths and aspirations of remarkable
              individuals from all walks of life. At our pageantry competition,
              we believe in fostering personal growth, self-confidence, and
              leadership skills. We provide a supportive environment that
              encourages participants to embrace their unique qualities and
              showcase their talents on a grand stage. Our pageant is not just
              about outer beauty; it is about inner beauty and the ability to
              make a positive impact in the world. We value integrity,
              intelligence, and compassion, and we strive to empower our
              contestants to become ambassadors of change in their communities.
              Through various rounds of competition, including talent, evening
              wear, and interview segments, our pageant aims to highlight the
              multifaceted qualities of each participant. We believe that every
              individual has a story to tell and a voice that deserves to be
              heard. Join us as we celebrate the power of diversity,
              individuality, and personal growth. Whether you aspire to be a
              role model, make a difference, or simply embrace your true self,
              our pageantry competition is the perfect platform to showcase your
              unique journey. Come and be a part of an unforgettable experience
              that will not only create lifelong memories but also empower you
              to shine brightly and make a positive impact in the world.
            </Styles.AboutText>
          </FadeIn>
        </Styles.SectionTitle>
        <Styles.AboutCardBox>
          <h1>Star prize</h1>
          <Styles.AboutCardWrapper>
            <FadeIn delay={0.2} direction='right'>
              <Styles.AboutCard>
                <Styles.AboutPrizeTitle>Winner</Styles.AboutPrizeTitle>
                <Styles.AboutPrizeMoney>
                  5 Million Naira (₦5,000,000) Only
                </Styles.AboutPrizeMoney>
                <Styles.AboutPrizeSubtitle>
                  An Official Car
                  <FaCar />
                </Styles.AboutPrizeSubtitle>
                <Styles.AboutPrizeSubtitle>
                  Brand Ambassador for One Year
                </Styles.AboutPrizeSubtitle>
              </Styles.AboutCard>
            </FadeIn>
            <FadeIn delay={0.4} direction='right'>
              <Styles.AboutCard>
                <Styles.AboutPrizeTitle>1st Runner-Up</Styles.AboutPrizeTitle>
                <Styles.AboutPrizeMoney>
                  3 Million Naira (₦3,000,000) Only
                </Styles.AboutPrizeMoney>
                <Styles.AboutPrizeSubtitle>
                  A Trip to Ghana
                  <FaPlane />
                </Styles.AboutPrizeSubtitle>
              </Styles.AboutCard>
            </FadeIn>
            <FadeIn delay={0.6} direction='right'>
              <Styles.AboutCard>
                <Styles.AboutPrizeTitle>2nd Runner-Up</Styles.AboutPrizeTitle>
                <Styles.AboutPrizeMoney>
                  1 Million Naira (₦1,000,000) Only
                </Styles.AboutPrizeMoney>
                <Styles.AboutPrizeSubtitle>
                  One Year Movie Endorsement
                  <FaVideo />
                </Styles.AboutPrizeSubtitle>
              </Styles.AboutCard>
            </FadeIn>
          </Styles.AboutCardWrapper>
        </Styles.AboutCardBox>
        <Styles.EnquiresBox>
          <h4>For Enquires and Sponsorship Contact</h4>
          <div>
            <FaWhatsapp />
            <p>+234816696006, +2348143433988, +2349043631090</p>
          </div>
        </Styles.EnquiresBox>
      </Container>
    </Styles.AboutContainer>
  );
};
