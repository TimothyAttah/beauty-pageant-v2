import React from 'react';
import { FadeIn } from '../fadeIn/FadeIn';
import { FaTrophy } from 'react-icons/fa';
import sliderImg5 from '../../assets/IMG-20240130-WA0006.jpg';
import sliderImg6 from '../../assets/IMG-20240130-WA0007.jpg';
import globe from '../../assets/globe.svg';
import calendar from '../../assets/calendar.svg';
import earth from '../../assets/world.png';
import flower from '../../assets/flower1.png';
import nigeria from '../../assets/Nigeria.svg';
import star from '../../assets/star.svg';

import * as Styles from './CordinatorStyles';

const Cordinator = () => {
  return (
    <Styles.CordinatorContainer>
      <FadeIn center='true' delay={0.2} direction='down'>
        <Styles.Title>
          <FaTrophy />
          <h1>Join NICA - Be a State Coordinator!</h1>
        </Styles.Title>
      </FadeIn>
      <Styles.CordinatorWrapper>
        <FadeIn delay={0.4} direction='left'>
          <Styles.ImgBox>
            <img src={sliderImg6} alt='img' />
          </Styles.ImgBox>
        </FadeIn>
        <Styles.InfoBox>
          <FadeIn delay={0.2} direction='right'>
            <Styles.InfoTitle primary='true'>
              <Styles.TitleWrapper>
                <img src={nigeria} alt='' />
                <h2>Nigerian Cultural Award (NICA)</h2>
              </Styles.TitleWrapper>
              <p>
                is on the lookout for dedicated State Coordinators across all 36
                states!
              </p>
            </Styles.InfoTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.InfoTitle primary='true'>
              <Styles.TitleWrapper>
                <img src={star} alt='' />
                <h4>Goals:</h4>
              </Styles.TitleWrapper>
              <p>
                Host an annual cultural award and beauty pageantry event. Foster
                cultural exchange and understanding among Nigerians. Establish
                NICA as a recognized cultural institution.
                <br />
                Contribute to the economic development of Nigeria's creative and
                cultural industries.
              </p>
            </Styles.InfoTitle>
          </FadeIn>

          <FadeIn delay={0.6} direction='right'>
            <Styles.InfoTitle primary='true'>
              <Styles.TitleWrapper>
                <img src={earth} alt='' />
                <h4>Target Audience:</h4>
              </Styles.TitleWrapper>
              <p>
                Open to Nigerians of all ages, backgrounds, and ethnicity's, and
                enthusiasts of Nigerian culture worldwide
              </p>
            </Styles.InfoTitle>
          </FadeIn>
          <FadeIn delay={0.8} direction='left'>
            <Styles.InfoTitle primary='true'>
              <Styles.TitleWrapper>
                <img src={calendar} alt='' />
                <h4>Event Date:</h4>
              </Styles.TitleWrapper>
              <p>May 26, 2024</p>
            </Styles.InfoTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='right'>
            <Styles.ImgBox>
              <img src={sliderImg5} alt='img' />
            </Styles.ImgBox>
          </FadeIn>
          <FadeIn delay={0.6} direction='left'>
            <Styles.InfoTitle primary='true'>
              <p>Ready to champion Nigeria's cultural excellence?</p>
              <p>
                Join NICA as a State Coordinator and be part of this
                extraordinary cultural celebration!
              </p>
              <Styles.TitleWrapper>
                <img src={globe} alt='' />
              </Styles.TitleWrapper>
              <p style={{ paddingTop: '10px' }}>
                +2348166960006, +2348143433988, +2349043631090
              </p>
            </Styles.InfoTitle>
          </FadeIn>
          <FadeIn delay={0.8} direction='right'>
            <Styles.InfoTitle primary='true'>
              <Styles.TitleWrapper primary='true'>
                <img src={flower} alt='' />
                <p>#NICA2024 #CulturalExcellence #StateCoordinatorsWanted</p>
              </Styles.TitleWrapper>
            </Styles.InfoTitle>
          </FadeIn>
        </Styles.InfoBox>
      </Styles.CordinatorWrapper>
    </Styles.CordinatorContainer>
  );
};

export default Cordinator;
