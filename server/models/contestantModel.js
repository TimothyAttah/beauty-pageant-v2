import mongoose from 'mongoose';

const ContestantSchema = new mongoose.Schema(
  {
    contestantName: {
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
    phoneNumber: {
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
  },
  { timestamps: true },
);

const ContestantModel = mongoose.model('Contestants', ContestantSchema);

export default ContestantModel;
