import React from 'react';
// import { FadeIn } from '../fadeIn/FadeIn';
import { Container } from '../../styles/globalStyles';
import * as Styles from './GalleryStyles';
import gallery1 from '../../assets/gallery11.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import gallery5 from '../../assets/gallery5.png';
import gallery6 from '../../assets/gallery6.png';
import gallery7 from '../../assets/gallery7.png';
import gallery8 from '../../assets/gallery8.png';
// import gallery9 from '../../assets/gallery9.png';
// import gallery1 from '../../assets/gallery1.png';
// import gallery1 from '../../assets/gallery1.png';
// import gallery1 from '../../assets/gallery1.png';
// import gallery1 from '../../assets/gallery1.png';

export const Gallery = () => {
  return (
    <Styles.GalleryContainer id='gallery'>
      <Container>
        <Styles.SectionTitle>
          <Styles.GalleryTitle>gallery</Styles.GalleryTitle>
        </Styles.SectionTitle>

        <Styles.Gallery>
          <Styles.GalleryItem gridFour>
            <img src={gallery6} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem wideImg>
            <img src={gallery1} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery2} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery3} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery4} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery5} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery7} alt='' />
          </Styles.GalleryItem>
          <Styles.GalleryItem>
            <img src={gallery8} alt='' />
          </Styles.GalleryItem>
        </Styles.Gallery>
      </Container>
    </Styles.GalleryContainer>
  );
};
