import mongoose from 'mongoose';

const ContestantSchema = new mongoose.Schema(
  {
    contestantName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    hairColor: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    schoolOrEmployemt: {
      type: String,
      required: true,
    },
    degreesOrAchievement: {
      type: String,
      required: true,
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
      required: true,
    },
    parentDate: {
      type: String,
      required: true,
    },
    contestantSignature: {
      type: String,
      required: true,
    },
    contestantDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ContestantModel = mongoose.model('Contestants', ContestantSchema);

export default ContestantModel;
