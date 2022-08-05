// Remember to rename all "first"
const First = require("../models/firstModel");

module.exports = {
  createFirst: async (req, res) => {
    try {
      const { name, body } = req.body;
      const newFirst = new First({
        name: name || "anonymous",
        body: body || " ",
      });
      const savedFirst = await newFirst.save();
      res.status(201).json(savedFirst);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  readAllFirst: async (req, res) => {
    try {
      const allFirst = await First.find({});
      res.status(200).json(allFirst);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
