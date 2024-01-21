import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const GalleryContainer = styled.section`
  padding: 100px 0;
  margin: auto;
  max-width: 80%;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    /* padding: 40px 0 50px 0; */
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 45px;

  /* text-align: left; */
  /* margin: 0 0 15px; */
`;

export const GalleryTitle = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.fs3xl};
  font-weight: bold;
  text-transform: capitalize;
  color: ${theme.color.textColor2};
  margin: 0 0 12px;
  padding: 0 40px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 34px;
    background-color: ${theme.color.textColor2};
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fslg};
    font-weight: bold;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: dense;
  gap: 6px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    /* changes the grid layout to a single column */
    grid-template-columns: 1fr;

    /* resets the grid placement properties for
the images spanning four grid cells */
    img.four-grid-cells {
    }

    /* resets the grid placement properties for
the images spanning two grid columns  */
    img.wide-image {
    }
  }
`;

export const GalleryItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    props.gridFour &&
    css`
      grid-row: span 2 / auto;
      grid-column: span 2 / auto;

      div {
        grid-row: span 2 / auto;
        grid-column: span 2 / auto;
      }
    `}

  ${(props) =>
    props.wideImg &&
    css`
      grid-column: span 2 / auto;
    `}

    @media screen and (max-width: 480px) {
    ${(props) =>
      props.gridFour &&
      css`
        grid-row: auto;
        grid-column: auto;
      `}

    ${(props) =>
      props.wideImg &&
      css`
        grid-column: auto;
      `}
  }
`;
