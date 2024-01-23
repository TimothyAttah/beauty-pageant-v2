import express from 'express';
import paymentControllers from '../controllers/paymentController.js';

const paymentRoutes = express.Router();
paymentRoutes.post('/', paymentControllers.startPayment);
paymentRoutes.get('/createPayment', paymentControllers.createPayment);
paymentRoutes.get('/paymentDetails', paymentControllers.getPayment);

export default paymentRoutes;
