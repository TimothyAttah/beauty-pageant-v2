import styled, { createGlobalStyle, css } from 'styled-components';
import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`

 :root {
    --hue: 200;
    --saturation: 70%;
    --lightness: 55%;

    --main-color: hsl(var(--hue), var(--saturation), var(--lightness));
  }

  html,
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;

    ${
      '' /* ::selection {
      color: ${({ theme }) => theme.color.textWhite};
      background-color: var(--main-color);

    }

    ::-webkit-scrollbar {
    width: 5px;
  } */
    }

   ${
     '' /* ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.bodyBgColor};
  }

::-webkit-scrollbar-thumb {
    background-color:var(--main-color);
  } */
   }


    ::-webkit-scrollbar{
      display: none;
    }
  }

     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
    text-decoration: none;
    list-style: none;
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
   ${
     '' /* max-width: 1500px;
    width: 100%; */
   }
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.fsmd};
    line-height: 1.5;
    ${'' /* color: ${({ theme }) => theme.color.textDarkGray}; */}
    background-color: ${({ theme }) => theme.color.bodyBgColor};
    ${'' /* background-color: red; */}
    ${
      '' /* -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent; */
    }

    ${'' /* border: 2px solid red; */}

  }

  ${
    '' /* h1, h2, h3, h4, h5, h6 {
     color: ${({ theme }) => theme.color.textXDarkGray};
    line-height: 1.3;
  } */
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.3rem;
  }


ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  vertical-align: middle;

}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  ${'' /* cursor: pointer; */}
  :focus {
    outline: none;
  }
}

.toast-message {
  background: darkblue;
  color: #fff;
  font-size: 20px;
  width: 34vw;
  padding: 30px 20px;
}

.header.bg-reveal::before {
  transform: translateY(0)
}

 ${
   '' /* .nav li {
   a.active {
    color: white;
    transition: .5s all;
      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: 10%;
        width: 80%;
        height: 5px;
        background: white;
        transition: 0.5s;
        border-radius: 30px;
      }
}
 }



 .nav li {
  a {
    transition: .5s all;
    :hover {
      color:white;
      ::after {
        content: '';
        position: absolute;
        bottom: -20%;
        left: 10%;
        width: 80%;
        height: 5px;
        background: white;
        transition: 0.5s;
        border-radius: 30px;
      }
    }
  }
 } */
 }

 .nav.nav-color li {
   a.active {
    color: white;
      ::after {
        background: white;
      }
   }
 }

 .nav.nav-color li a {
 :hover {
  color: white;
   ::after {
        background: white;
      }
 }
 }
`;

export const Container = styled.div`
  /* max-width: 1170px; */
  max-width: 1500px;
  margin: auto;
  padding: 0 15px;
  /* border: 2px dashed blue; */

  ${(props) =>
    props.primary &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.form &&
    css`
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: var(--main-color); */
      margin-top: 150px;
    `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;

  ${(props) =>
    props.contact &&
    css`
      max-width: 1000px;
      margin: auto;
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    grid-template-columns: 1fr;
  }
`;
