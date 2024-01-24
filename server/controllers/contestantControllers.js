import Contestants from '../models/contestantModel.js';

export const contestantController = {
  getAllContestant: async (req, res) => {
    try {
      const contestants = await Contestants.find();
      // res.status(200).json({ msg: 'All Contestants', contestants });
      res.send(contestants);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
