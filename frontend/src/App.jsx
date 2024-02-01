import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { About } from './pages/about/About';
import { Gallery } from './pages/gallery/Gallery';
import { Contact } from './pages/contact/Contact';
import Payment from './pages/payment/Payment';
import Layout from './components/layout/Layout';
import {
  RequireAuth,
  RequireConfirmation,
  RequireRegister,
} from './components/RequireAuth';
import { useDispatch } from 'react-redux';
import { getAllContestant } from './redux/actions/contestantActions';
import { Profile } from './pages/profile/Profile';
import { Contestants } from './pages/contestant/Contestants';
import ConfirmPayment from './pages/payment/ConfirmPayment';

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('header')
        .classList.toggle('window-scroll', window.scrollY > 0);
    });
  }, []);

  // window.addEventListener('error', (e) => {
  //   console.error(e.message);
  //   e.stopImmediatePropagation();
  //   e.preventDefault();
  // });

  // window.ResizeObserver = undefined;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContestant());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** public routes */}
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />

          <Route path='contestant' element={<Contestants />} />

          {/** private routes */}
          <Route element={<RequireRegister />}>
            <Route path='payment' element={<Payment />} />
            <Route path='confirm-payment' element={<ConfirmPayment />} />
          </Route>
          <Route element={<RequireConfirmation />}>
            <Route path='login' element={<Login />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path='profile/:id' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
