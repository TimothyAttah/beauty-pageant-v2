import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

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
    profilePicture: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

ContestantSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      phoneNumber: this.phoneNumber,
      email: this.email,
    },
    process.env.JWT_SECRET,
  );

  return token;
};

const ContestantModel = mongoose.model('Contestants', ContestantSchema);

export default ContestantModel;
