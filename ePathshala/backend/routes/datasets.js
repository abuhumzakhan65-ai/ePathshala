const express = require("express");
const router = express.Router();
const Template = require("../models/DatasetTemplate");

// list templates
router.get("/templates", async (req,res)=>{
  const templates = await Template.find().limit(200);
  res.json(templates);
});

// add template (admin)
router.post("/templates", async (req,res)=>{
  const t = new Template(req.body);
  await t.save();
  res.status(201).json(t);
});

module.exports = router;
