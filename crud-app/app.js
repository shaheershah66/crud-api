const express = require("express");
const productRouter = require("./routes/product");
const { dbConnection } = require("./db/index");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/products", productRouter.router);

// db connection
dbConnection();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running at port", process.env.PORT || 5000);
});
