require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const surveyRoutes = require("./routes/surveys.js");
const studentRoutes = require("./routes/students.js");
const salamRoutes = require("./routes/salams.js");
const middlewareLogRequest = require("./middleware/logs.js");

const app = express();

// app.method(path, handler)
// app.use("/", (req, res, next) => {
//   res.send("Hello world");
// });

app.use(middlewareLogRequest);

//hehe boy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "Get");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/surveys", surveyRoutes);
app.use("/students", studentRoutes);
app.use("/salams", salamRoutes);

app.get("/", (req, res) => {
  res.json({
    nama: "Ramdhan Nugraha Pratama  ",
    email: "ramdhannp6@gmail.com",
  });
});

app.post("/", (req, res) => {
  res.send("Hello post Method");
});

app.listen(PORT, () => {
  console.log(`server berhasil di running diport ${PORT}`);
});
