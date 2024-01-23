import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const PaymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paidBy: { type: ObjectId, ref: 'Contestant' },
    reference: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model('Payments', PaymentSchema);

export default Payment;
