import React, { useState } from 'react';
import nicaLogo from '../../assets/nicaLogo.png';
// import logo from '../../assets/logo.jpg';
import { FadeIn } from '../fadeIn/FadeIn';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';
import * as Styles from './HeaderStyles';
import { FaBars } from 'react-icons/fa';
import { Button } from '../button/HeaderButton';
import { AnimatePresence } from 'framer-motion';
import { SideBar } from '../sideBar/SideBar';
import { contestantAuth } from '../RequireAuth';

const navData = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: '/',
  },
  {
    name: 'About',
    // icon: <RiPriceTagFill />,
    to: '/about',
  },
  {
    name: 'Contestant',
    // icon: <RiSuitcase3Line />,
    to: '/contestant',
  },
  {
    name: 'Gallery',
    // icon: <RiBookReadFill />,
    to: '/gallery',
  },
  {
    name: 'Contact',
    // icon: <RiSuitcase3Line />,
    to: '/contact',
  },
];

export const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  const [open, setOpen] = useState(false);
  return (
    <Styles.MainHeaderContainer>
      <Container primary>
        <Styles.HeaderLogo>
          <FadeIn delay={0.2} direction='down'>
            <Link to='/'>
              <img src={nicaLogo} alt='logo' />
            </Link>
          </FadeIn>
        </Styles.HeaderLogo>
        <Styles.HeaderNavWrapper>
          <FadeIn delay={0.3} direction='down'>
            <ul>
              {navData.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
          </FadeIn>
        </Styles.HeaderNavWrapper>
        {contestantAuth ? (
          <Styles.DivWrapper>
            <FadeIn delay={0.4} direction='down'>
              <Styles.HeaderBtn>
                <Button to='/profile'>Profile</Button>
                <Styles.Button onClick={handleLogout}>
                  <button>Logout</button>
                </Styles.Button>
              </Styles.HeaderBtn>
              <Styles.FaBarsBox onClick={() => setOpen(true)}>
                <FaBars />
              </Styles.FaBarsBox>
            </FadeIn>
          </Styles.DivWrapper>
        ) : (
          <Styles.DivWrapper>
            <FadeIn delay={0.4} direction='down'>
              <Styles.HeaderBtn>
                <Button to='/login'>Login</Button>
                <Button to='/register'>Register</Button>
              </Styles.HeaderBtn>
              <Styles.FaBarsBox onClick={() => setOpen(true)}>
                <FaBars />
              </Styles.FaBarsBox>
            </FadeIn>
          </Styles.DivWrapper>
        )}
      </Container>
      <AnimatePresence>{open && <SideBar setOpen={setOpen} />}</AnimatePresence>
    </Styles.MainHeaderContainer>
  );
};
