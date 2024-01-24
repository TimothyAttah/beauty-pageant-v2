import express from 'express';
import paymentControllers from '../controllers/paymentController.js';
import paymentController2 from '../controllers/payment2.js';
// import auth from '../middlewares/auth.js';

const paymentRoutes = express.Router();
paymentRoutes.post('/', paymentControllers.startPayment);
paymentRoutes.get('/createPayment', paymentControllers.createPayment);
paymentRoutes.get('/paymentDetails', paymentControllers.getPayment);
paymentRoutes.get('/payments', paymentControllers.getAllPayment);
paymentRoutes.get('/paystack', paymentController2.getPayment);

export default paymentRoutes;
