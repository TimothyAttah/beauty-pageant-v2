import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './PaymentStyles';

const Payment = () => {
  return (
    <Styles.PaymentContainer>
      <Container>
        <h1>Payment Information</h1>
        <div>
          <form>
            <Styles.PaymentInput>
              <label htmlFor='name'>Name</label>
              <input type='text' />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='email'>Email</label>
              <input type='text' />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='password'>Password</label>
              <input type='text' />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='city'>City</label>
              <input type='text' />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='Country'>Country</label>
              <input type='text' />
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <label htmlFor='state'>State</label>
              <input type='text' />
            </Styles.PaymentInput>
            <div>
              <h2>Payment Method</h2>
              <Styles.PaymentCardContainer>
                <div>
                  <h2>Stipe</h2>
                  <button>Pay via Stripe</button>
                </div>
                <div>
                  <h2>PayPal</h2>
                  <button>Pay via PayPal</button>
                </div>
                <div>
                  <h2>RazorPay</h2>
                  <button>Pay via RazorPay</button>
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
