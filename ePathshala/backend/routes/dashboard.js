const express = require("express");
const router = express.Router();

router.get("/summary", async (req,res)=>{
  // sample summary data - in production aggregate real collections
  res.json({
    courses: 42,
    internships: 120,
    certificatesIssued: 512,
    datasetsAvailable: 50
  });
});

module.exports = router;
