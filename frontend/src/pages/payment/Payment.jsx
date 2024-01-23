import React, { useState } from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './PaymentStyles';
import PaystackPop from '@paystack/inline-js';
import { useNavigate } from 'react-router-dom';
import { startPayment, getPayment } from '../../redux/actions/paymentActions ';
import { useDispatch } from 'react-redux';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    amount: '',
  });
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(startPayment(paymentData));
    // dispatch(getPayment());

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: 'pk_test_07c16182445b8c7bf4c69e83f9d78738abdbd50c',
      amount: paymentData.amount * 100,
      email: paymentData.email,
      name: paymentData.name,

      onSuccess(transaction) {
        console.log(transaction);
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);

        // navigation(transaction.redirecturl);
      },

      onCancel() {
        alert('You have canceled the transaction.');
      },
    });

    console.log(paymentData);
  };
  return (
    <Styles.PaymentContainer>
      <Container>
        <h1>Payment Information</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <Styles.PaymentInput>
              <label htmlFor='amount'>Amount</label>
              <input
                type='text'
                name='amount'
                value={paymentData.amount}
                onChange={handleInputs}
              />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                value={paymentData.name}
                onChange={handleInputs}
              />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                value={paymentData.email}
                onChange={handleInputs}
              />
            </Styles.PaymentInput>

            <div>
              {/* <h2>Payment Method</h2> */}
              <Styles.PaymentCardContainer>
                {/* <div>
                  <h2>Stipe</h2>
                  <button>Pay via Stripe</button>
                </div> */}
                <div>
                  <h2>PayPal</h2>
                  <button>Pay via PayPal</button>
                </div>
                {/* <div>
                  <h2>RazorPay</h2>
                  <button>Pay via RazorPay</button>
                </div> */}
              </Styles.PaymentCardContainer>
            </div>
          </form>
        </div>
      </Container>
    </Styles.PaymentContainer>
  );
};

export default Payment;
