const mongoose = require("mongoose");
const CertificateSchema = new mongoose.Schema({
  title: String,
  userEmail: String,
  issuedAt: { type: Date, default: Date.now },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});
module.exports = mongoose.model("Certificate", CertificateSchema);
