const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  paid: { type: Boolean, default: false },
  price: { type: Number, default: 0 },
  published: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model("Course", CourseSchema);
