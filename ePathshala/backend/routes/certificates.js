const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");

// list
router.get("/", async (req,res)=>{
  const list = await Certificate.find().limit(200);
  res.json(list);
});

// generate (POST) - simple auto-gen example
router.post("/generate", async (req,res)=>{
  const { title, userEmail, courseId } = req.body;
  const c = new Certificate({ title, userEmail, courseId });
  await c.save();
  // In production: generate PDF or signed image
  res.status(201).json(c);
});

module.exports = router;
