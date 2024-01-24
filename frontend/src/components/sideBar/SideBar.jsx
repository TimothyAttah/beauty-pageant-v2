import React from 'react';
import * as Styles from './SideBarStyles';
import { useNavigate, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { contestantAuth } from '../RequireAuth';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const navDataWithLogin = [
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
  {
    name: 'Login',
    // icon: <RiHome2Line />,
    to: '/login',
  },
  {
    name: 'Register',
    // icon: <RiHome2Line />,
    to: '/register',
  },
];

const navDataWithoutLogin = [
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
  {
    name: 'Profile',
    // icon: <RiSuitcase3Line />,
    to: '/profile',
  },
];

export const SideBar = ({ setOpen }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setOpen(false);
    navigate('/login');
    window.location.href = '/login';
  };
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.CloseSideBarIcon onClick={() => setOpen(false)}>
        <FaTimes />
      </Styles.CloseSideBarIcon>
      {contestantAuth ? (
        <Styles.SideBarNavLinks>
          {navDataWithoutLogin.map((item, i) => (
            <NavLink
              to={item.to}
              key={i}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </Styles.SideBarNavLinks>
      ) : (
        <Styles.SideBarNavLinks>
          {navDataWithLogin.map((item, i) => (
            <NavLink
              to={item.to}
              key={i}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </Styles.SideBarNavLinks>
      )}

      {contestantAuth && (
        <Styles.Button onClick={handleLogout}>
          <button>Logout</button>
        </Styles.Button>
      )}
    </Styles.SideBar>
  );
};
