const mongoose = require("mongoose");

// Remember to rename all "first"
const firstSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
    body: {
      type: String,
      required: true,
      maxLength: 2000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("First", firstSchema);
