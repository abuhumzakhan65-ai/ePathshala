const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

router.get("/", async (req,res)=> {
  const list = await Internship.find().limit(200);
  res.json(list);
});

router.post("/", async (req,res)=>{
  const it = new Internship(req.body);
  await it.save();
  res.status(201).json(it);
});

module.exports = router;
