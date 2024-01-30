import React, { useState } from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './ConfirmPaymentStyles';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const reference = localStorage.getItem('referenceCode');

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const [referenceCode, setReferenceCode] = useState('');
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (referenceCode === '') {
      toast.error('Please enter your reference code');
    } else if (referenceCode !== reference) {
      toast.error('Reference code is invalid');
    } else if (referenceCode === reference) {
      toast.success('Payment is confirmed');
      localStorage.setItem('isActive', 'true');
      window.location.reload();
    }

    navigate('/login');
    window.location.href = '/login';
  };
  return (
    <Styles.ConfirmPaymentContainer>
      <Styles.InfoBox>
        <FadeIn delay={0.2} direction='down'>
          <h1>Confirm your payment </h1>
        </FadeIn>
        <FadeIn center='true' delay={0.4} direction='down'>
          <small>Please check your email for your receipt</small>
        </FadeIn>
      </Styles.InfoBox>
      <Styles.Form onSubmit={handleOnSubmit}>
        <FadeIn center='true' delay={0.6} direction='down'>
          <label htmlFor='payment'>Enter your reference code</label>
        </FadeIn>
        <FadeIn center='true' delay={0.8} direction='down'>
          <input
            type='text'
            name='referenceCode'
            value={referenceCode}
            onChange={(e) => setReferenceCode(e.target.value)}
          />
        </FadeIn>
        <FadeIn center='true' delay={0.6} direction='up'>
          <button>Submit Reference Code</button>
        </FadeIn>
      </Styles.Form>
      <Link to='/payment'>Make Payment Here.</Link>
    </Styles.ConfirmPaymentContainer>
  );
};

export default ConfirmPayment;
