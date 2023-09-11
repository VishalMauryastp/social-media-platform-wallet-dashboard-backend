const express = require("express");
require("dotenv").config();
const routes = require("./src/routes");
const cors = require("cors");

const Database = require("./src/config/database");

const app = express();
app.use(cors());
app.use(express.json())
Database();

// const routes = require("./src/routes/index")

const PORT = process.env.PORT || 3002;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
