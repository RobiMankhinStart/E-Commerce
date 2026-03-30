const express = require("express");
const route = express.Router();
const authRouter = require("./auth");
const productRouter = require("./product");
const order = require("./order");
const authMiddleWare = require("../middleware/authMiddleware");

route.use("/auth", authRouter);
route.use("/product", productRouter);
route.use("/category", require("./category"));
route.use("/cart", authMiddleWare, require("./cart"));

route.use(authMiddleWare, order);

route.get("/", (req, res) => {
  res.send("From Server");
});

module.exports = route;
