import jwt from 'jsonwebtoken';
import Contestants from '../models/contestantModel.js';

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

      const newContestant = await new Contestants({
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

      await newContestant.save();

      res.status(200).json({ msg: 'Registered Successfully.', newContestant });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  loginContestant: async (req, res) => {
    const { email } = req.body;
    const contestant = await Contestants.findOne({ email });
    if (!contestant)
      return res.status(400).json({ msg: 'This email does not exists.' });

    const token = jwt.sign({ _id: contestant._id }, process.env.JWT_SECRET);

    res.status(200).json({ msg: 'Login Successfully.', token, contestant });
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
