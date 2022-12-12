const express = require("express");
const contactRouter = require("./routes/contactRouter");
const accountRouter = require("./routes/accountRouter");
const transferRouter = require("./routes/transferRouter");
const locationRouter = require("./routes/locationRouter");
const app = express();

//    <-- Usnig Middlewares-->

app.use(express.json());
app.use("/api/v1", contactRouter);
app.use("/api/v1", accountRouter);
app.use("/api/v1", transferRouter);
app.use("/api/v1", locationRouter);

app.get("/", (req, res) => {
  res.send("ERP website Backend");
});

module.exports = app;
