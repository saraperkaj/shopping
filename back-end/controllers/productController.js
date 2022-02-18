const express = require("express");

const {
  getAllProd,
  getOneProd,
  addNewProd,
  deleteProd,
  updateProd,
} = require("../queries/product");

const products = express.Router();

products.get("/", async (request, response) => {
  //   console.log("GET request to /products");
  const all_prod = await getAllProd();
  if (all_prod.length === 0) {
    response.status(404).json({ error: error });
    return;
  }

  response.status(200).json(all_prod);
});

// products.get("/", async (request, response) => {
//     co
// })

module.exports = products;
