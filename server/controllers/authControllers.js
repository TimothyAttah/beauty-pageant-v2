import Contestants from '../models/contestantModel.js';

export const authControllers = {
  registerContestant: async (req, res) => {
    try {
      const contestantData = req.body;
      const { email } = contestantData;

      const contestant = await Contestants.findOne({ email });
      if (contestant)
        return res.status(400).json({ msg: 'This email already exists.' });

      const newContestant = await new Contestants({
        contestantData,
      });

      await newContestant.save();
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
