console.log("helo");
require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig");
const app = express();

app.use(express.json());
dbConfig();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
