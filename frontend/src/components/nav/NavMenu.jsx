import React from 'react';
import { NavLink } from 'react-router-dom';
// import {
//   RiBookReadFill,
//   RiHome2Line,
//   RiPriceTagFill,
//   RiShieldUserFill,
//   RiSuitcase3Line,
// } from 'react-icons/ri';
import * as Styles from './NavMenuStyles';
import { NavLink as NavMenu } from '../navlink/NavLink';

const navData = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: 'home',
  },
  {
    name: 'About',
    // icon: <RiPriceTagFill />,
    to: 'about',
  },
  {
    name: 'Contact',
    // icon: <RiSuitcase3Line />,
    to: 'contact',
  },
  {
    name: 'Gallery',
    // icon: <RiBookReadFill />,
    to: 'gallery',
  },
];

export const Nav = () => {
  const headerBg = () => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('nav')
        .classList.toggle('nav-color', window.scrollY > 0);
    });
  };

  headerBg();

  return (
    <Styles.NavMenuContainer className='nav'>
      {navData.map((item, i) => (
        <li key={i}>
          <NavMenu
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>{item.name}</span>
            </NavLink>
          </NavMenu>
        </li>
      ))}
    </Styles.NavMenuContainer>
  );
};
