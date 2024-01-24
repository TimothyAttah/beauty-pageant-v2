/* eslint-disable no-template-curly-in-string */
import { PAYMENT } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const startPayment = (paymentData) => async (dispatch) => {
  try {
    const { data } = await api.startPayment(paymentData);

    dispatch({
      type: PAYMENT.START_PAYMENT,
      payload: data,
    });

    // console.log(data);

    const { authorization_url, reference } = data.data.data;

    // window.location.href = redirectUrl;
    if (authorization_url) {
      window.location.href = `${authorization_url}`;
    }

    // if (status === true) {
    //   window.location.href = '/login';
    // }

    if (data.status === 'Success') {
      const { data } = await api.getPaymentReceipt(reference);

      dispatch({
        type: PAYMENT.GET_PAYMENT,
        payload: data,
      });

      // console.log('createPayment', data);
      localStorage.setItem('payment', JSON.stringify(data));
    }

    // localStorage.setItem('contestant', JSON.stringify(data.newContestant));
    // toast.success(data.msg);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const getPayment = (paymentData) => async (dispatch) => {
  try {
    const { data } = await api.getPaymentReceipt(paymentData);

    dispatch({
      type: PAYMENT.GET_PAYMENT,
      payload: data,
    });

    // console.log(data.data);
    // if (data.data.status === true) {
    //   window.location.href = `https://checkout.paystack.com/h4ss3fej3wtf2z3`;
    // }

    // localStorage.setItem('contestant', JSON.stringify(data.newContestant));
    // toast.success(data.msg);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
