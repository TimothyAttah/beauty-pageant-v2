import axios from 'axios';

// export const baseURL = 'http://localhost:8080/api';
export const baseURL = 'https://beauty-pageant-v2-5f26.vercel.app/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return req;
});

export const registerContestant = (contestantData) =>
  API.post('/auth/register', contestantData);

export const loginContestant = (contestantData) =>
  API.post('/auth/login', contestantData);

export const getAllContestant = () => API.get('/contestant');

// export const startPayment = (paymentData) => API.post('/pay', paymentData)

export const startPayment = (paymentData) => API.post('/pay', paymentData);
export const createPayment = (reference) =>
  API.get(`/pay/createPayment?reference=${reference}`);

export const getPaymentReceipt = (reference) =>
  API.get('/pay/paymentDetails', reference);
