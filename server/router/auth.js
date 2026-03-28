const express = require("express");
const { signUp } = require("../../controller/auth.controller");
const route = express.Router();
route.post("/signup", signUp);
module.exports = route;
