// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

const productController = require("./controllers/productController");
app.use("/products", productController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (request, response) => {
  response.status(404).json({ Error: "Page Not Found!" });
});

// EXPORT
module.exports = app;
