import jwt from 'jsonwebtoken';
import Contestants from '../models/contestantModel.js';
import _ from 'lodash';
import axios from 'axios';
import Otp from '../models/otpModel.js';
import otpGenerators from 'otp-generator';
import bcrypt from 'bcryptjs';

export const authControllers = {
  registerContestant: async (req, res) => {
    try {
      const contestantData = req.body;
      const {
        contestantName,
        age,
        birthday,
        hairColor,
        eyeColor,
        parentName,
        address,
        phoneNumber,
        email,
        height,
        weight,
        schoolOrEmployemt,
        degreesOrAchievement,
        awards,
        noPublishPhoto,
        parentSignature,
        parentDate,
        contestantSignature,
        contestantDate,
      } = contestantData;

      const contestant = await Contestants.findOne({ email });
      if (contestant)
        return res.status(400).json({ msg: 'This email already exists.' });

      const contestantPhoneNum = await Contestants.findOne({ phoneNumber });
      if (contestantPhoneNum)
        return res
          .status(400)
          .json({ msg: 'This phone number already exists.' });

      // const OTP = otpGenerators.generate(6, {
      //   digits: true,
      //   alphabet: false,
      //   lowerCaseAlphabets: false,
      //   upperCaseAlphabets: false,
      //   specialChars: false,
      // });

      // const number = phoneNumber;
      // console.log(OTP);

      // const otp = new Otp({
      //   contestantFullName,
      //   age,
      //   birthday,
      //   hairColor,
      //   eyeColor,
      //   parentName,
      //   address,
      //   email,
      //   height,
      //   weight,
      //   schoolOrEmployemt,
      //   degreesOrAchievement,
      //   awards,
      //   noPublishPhoto,
      //   parentSignature,
      //   parentDate,
      //   contestantSignature,
      //   contestantDate,
      //   phoneNumber: number,
      //   otp: OTP,
      // });
      // const salt = await bcrypt.genSalt(10);
      // otp.otp = await bcrypt.hash(otp.otp, salt);
      // const result = await otp.save();

      // // return res.send(result);

      const newContestant = new Contestants({
        contestantName,
        age,
        birthday,
        hairColor,
        eyeColor,
        parentName,
        address,
        phoneNumber,
        email,
        height,
        weight,
        schoolOrEmployemt,
        degreesOrAchievement,
        awards,
        noPublishPhoto,
        parentSignature,
        parentDate,
        contestantSignature,
        contestantDate,
      });

      const token = newContestant.generateJWT();
      const result = await newContestant.save();

      return res.status(200).send({
        msg: 'Contestant Registration Successfull!',
        token,
        data: result,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  verifyRegistration: async (req, res) => {
    const contestantData = req.body;
    const {
      contestantFullName,
      age,
      birthday,
      hairColor,
      eyeColor,
      parentName,
      address,
      phoneNumber,
      email,
      height,
      weight,
      schoolOrEmployemt,
      degreesOrAchievement,
      awards,
      noPublishPhoto,
      parentSignature,
      parentDate,
      contestantSignature,
      contestantDate,
    } = contestantData;
    try {
      const otpHolder = await Otp.find({
        phoneNumber: phoneNumber,
      });

      if (otpHolder.length === 0)
        return res.status(400).json({ msg: 'You use an Expired OTP!' });
      const rightOtpFind = otpHolder[otpHolder.length - 1];
      const validContestant = await bcrypt.compare(
        req.body.otp,
        rightOtpFind.otp,
      );

      if (rightOtpFind.phoneNumber === phoneNumber && validContestant) {
        const contestant = new Contestants({
          contestantFullName,
          age,
          birthday,
          hairColor,
          eyeColor,
          parentName,
          address,
          phoneNumber,
          email,
          height,
          weight,
          schoolOrEmployemt,
          degreesOrAchievement,
          awards,
          noPublishPhoto,
          parentSignature,
          parentDate,
          contestantSignature,
          contestantDate,
        });

        // const contestant = new Contestants(_.pick(req.body, ['phoneNumber']));
        const token = contestant.generateJWT();
        const result = await contestant.save();
        const OTPDelete = await Otp.deleteMany({
          phoneNumber: rightOtpFind.phoneNumber,
        });

        return res.status(200).send({
          msg: 'Contestant Registration Successfull!',
          token,
          data: result,
        });
      } else {
        return res.status(400).send('Your OTP was wrong');
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  loginContestant: async (req, res) => {
    const { email } = req.body;
    const contestant = await Contestants.findOne({ email });
    if (!contestant)
      return res.status(400).json({ msg: 'This email does not exists.' });

    // const token = jwt.sign({ _id: contestant._id }, process.env.JWT_SECRET);
    const token = contestant.generateJWT();

    res
      .status(200)
      .json({ msg: 'Login Successfully.', token, data: contestant });
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
