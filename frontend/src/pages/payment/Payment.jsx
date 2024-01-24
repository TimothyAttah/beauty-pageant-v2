import React, { useState } from 'react';
import { Container } from '../../styles/globalStyles';
// import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './PaymentStyles';
// import PaystackPop from '@paystack/inline-js';
import { startPayment } from '../../redux/actions/paymentActions ';
import { useDispatch } from 'react-redux';
// import axios from 'axios';

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

  // const startPaymentMethod = async (paymentData) => {
  //   const api = `http://localhost:8080/api/pay`;

  //   try {
  //     const { data } = await axios.post(api, paymentData);
  //     console.log(data);
  //     // const redirectUrl = JSON.stringify(data).data.authorization_url;
  //     const redirectUrl = data.data.data;

  //     console.log(redirectUrl);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // startPayment(paymentData);

    if (
      paymentData.amount !== '' &&
      paymentData.email !== '' &&
      paymentData.name !== ''
    ) {
      dispatch(startPayment(paymentData));
    }

    // dispatch(getPayment());

    // const paystack = new PaystackPop();

    // paystack.newTransaction({
    //   key: 'pk_test_07c16182445b8c7bf4c69e83f9d78738abdbd50c',
    //   amount: paymentData.amount * 100,
    //   email: paymentData.email,
    //   name: paymentData.name,

    //   onSuccess(transaction) {
    //     console.log(transaction);
    //     let message = `Payment Complete! Reference ${transaction.reference}`;
    //     alert(message);

    //     // navigation(transaction.redirecturl);
    //   },

    //   onCancel() {
    //     alert('You have canceled the transaction.');
    //   },
    // });
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
                required
                onChange={handleInputs}
              />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                required
                value={paymentData.name}
                onChange={handleInputs}
              />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                required
                value={paymentData.email}
                onChange={handleInputs}
              />
            </Styles.PaymentInput>

            <div>
              <Styles.PaymentCardContainer>
                <div>
                  <button>Make Payment</button>
                </div>
              </Styles.PaymentCardContainer>
            </div>
          </form>
        </div>
      </Container>
    </Styles.PaymentContainer>
  );
};

export default Payment;
