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

  getOneContestant: async (req, res) => {
    try {
      const contestant = await Contestants.findOne({ _id: req.params.id });
      if (!contestant)
        return res
          .status(400)
          .json({ msg: 'This contestant does not exists.' });
      return res.status(200).json({ data: contestant });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
