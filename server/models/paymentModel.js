import mongoose from 'mongoose';
import Contestant from './contestantModel';

const PaymentSchema = new mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
});

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;
