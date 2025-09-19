const mongoose = require("mongoose");
const TemplateSchema = new mongoose.Schema({
  name: String,
  description: String,
  rows: Number,
  columns: [String]
});
module.exports = mongoose.model("DatasetTemplate", TemplateSchema);
