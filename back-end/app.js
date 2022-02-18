// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/products", productController);

app.get("*", (request, response) => {
  response.status(404).json({ Error: "Page Not Found!" });
});

// EXPORT
module.exports = app;
