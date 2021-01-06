const express = require("express");
const db = require("./config/db");
const colors = require("colors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();
connectDB();
const app = express();

app.use((req, res, next) => {
  console.log("test middleware");
  next();
});

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("api is running XDXD");
});

app.use("/api/products", productRoutes);

//standard 404 page
app.use(notFound);

//middleware to show stack trace of error in dev
//if the hit routes are not defined (i.e. 1 ipv mongodb ids)
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`.cyan.bold
  )
);
