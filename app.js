const express = require("express");
const bodyParser = require("body-parser");
const contactRouter = require("./routes/contactRouter");
const accountRouter = require("./routes/accountRouter");
const transferRouter = require("./routes/transferRouter");
const locationRouter = require("./routes/locationRouter");
const productRouter = require("./routes/productRouter");
const hrRouter = require("./routes/hrRouter");  
const purchaseRouter = require("./routes/purchaseRouter");
const userRouter = require("./routes/userRouter");
const app = express();
require("dotenv").config({ path: "config/config.env" });
const cookieParser = require("cookie-parser");

//  <-- setting the template engine  EJS -->
app.set("view engine", "ejs");
// app.use(express.static('Business_ERP'));
app.use(express.static('public'));


//    <-- Usnig Middlewares-->


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use( contactRouter);  //  working
app.use("/api/v1", accountRouter);
app.use("/api/v1", transferRouter);
app.use("/api/v1", locationRouter);
app.use(purchaseRouter);   // working
app.use("/api/v1" , productRouter);  // working 
app.use('/api/v1',hrRouter);
app.use("/api/v1",userRouter);

app.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = app;
