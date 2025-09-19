const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// list courses
router.get("/", async (req,res)=>{
  const list = await Course.find().limit(100);
  res.json(list);
});

// add course (admin)
router.post("/", async (req,res)=>{
  const c = new Course(req.body);
  await c.save();
  res.status(201).json(c);
});

module.exports = router;
