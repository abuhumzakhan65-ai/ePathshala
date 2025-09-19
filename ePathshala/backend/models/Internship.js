const mongoose = require("mongoose");
const InternshipSchema = new mongoose.Schema({
  title: String,
  domain: String,
  duration: String,
  stipend: String,
  remote: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model("Internship", InternshipSchema);
