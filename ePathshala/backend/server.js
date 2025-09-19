require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const coursesRouter = require("./routes/courses");
const internshipsRouter = require("./routes/internships");
const certificatesRouter = require("./routes/certificates");
const datasetsRouter = require("./routes/datasets");
const dashboardRouter = require("./routes/dashboard");
const resourcesRouter = require("./routes/resources");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));

connectDB().catch(err => { console.error(err); process.exit(1); });

app.use("/api/courses", coursesRouter);
app.use("/api/internships", internshipsRouter);
app.use("/api/certificates", certificatesRouter);
app.use("/api/datasets", datasetsRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/resources", resourcesRouter);

app.get("/", (req,res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Backend listening on", PORT));
