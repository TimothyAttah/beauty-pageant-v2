import React, { useEffect, useState } from 'react';
import { FadeIn } from '../fadeIn/FadeIn';
import * as Styles from './FormStyles';
import nicaFormLogo from '../../assets/nicaLogoForm.png';
import { useDispatch } from 'react-redux';
import { loginContestant } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { getPayment } from '../../redux/actions/paymentActions ';

const formVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const initialData = {
    contestantName: '',
    email: '',
  };
  const [userData, setUserData] = useState(initialData);
  const dispatch = useDispatch();

  const { contestantName, email } = userData;

  useEffect(() => {
    dispatch(getPayment());
  });

  const handleInputs = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginContestant(userData));
    navigate('/profile');
  };
  return (
    <Styles.FormContainer>
      <FadeIn delay={0.2} direction='down'>
        <Styles.FormLogo>
          <img src={nicaFormLogo} alt='logo' />
          <div>
            <h1>Nica</h1>
            <small>official nigeria ltd.</small>
          </div>
        </Styles.FormLogo>
      </FadeIn>
      <FadeIn delay={0.4} direction='down' center='true'>
        <Styles.FormHeader>Face of nica 2024 login form</Styles.FormHeader>
      </FadeIn>
      <Styles.Form
        onSubmit={handleOnSubmit}
        variants={formVariants}
        initial='hidden'
        animate='visible'
        transition={{
          staggerChildren: '0.8',
          delayChildren: '0.5',
          type: 'spring',
          delay: '0.7',
        }}
      >
        <Styles.InputBox>
          <input
            type='text'
            required
            name='contestantName'
            value={contestantName}
            onChange={handleInputs}
          />
          <span>Contestants Name</span>
        </Styles.InputBox>

        <Styles.InputBox>
          <input
            type='text'
            required
            name='email'
            value={email}
            onChange={handleInputs}
          />
          <span>Email</span>
        </Styles.InputBox>

        <Styles.BtnContainer width='250px'>
          <button>Login</button>
        </Styles.BtnContainer>
      </Styles.Form>
    </Styles.FormContainer>
  );
};
