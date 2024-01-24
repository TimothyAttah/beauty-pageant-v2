import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema(
  {
    contestantFullName: {
      type: String,
    },
    age: {
      type: String,
    },
    birthday: {
      type: String,
    },
    hairColor: {
      type: String,
    },
    eyeColor: {
      type: String,
    },
    parentName: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    schoolOrEmployemt: {
      type: String,
    },
    degreesOrAchievement: {
      type: String,
    },
    awards: {
      type: String,
    },
    noPublishPhoto: {
      type: Boolean,
      default: false,
    },
    parentSignature: {
      type: String,
    },
    parentDate: {
      type: String,
    },
    contestantSignature: {
      type: String,
    },
    contestantDate: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   index: { expires: 300 },
    // },
    // After 5 minutes it will be deleted automatically from the database
  },
  { timestamps: true },
);

const OTPModel = mongoose.model('OTP', OtpSchema);
export default OTPModel;
