const express = require("express");
const router = express.Router();

router.get("/", (req,res)=> {
  res.json([
    { title: "Docs", url: "/docs" },
    { title: "Cheatsheet", url: "/cheatsheet" }
  ]);
});

module.exports = router;
