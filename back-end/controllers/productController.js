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

products.get("/:id", async (request, response) => {
  // console.log("GET request to /products/:id");
  const oneProd = await getOneProd(request.params.id);
  if (oneProd.id) {
    response.status(200).json(oneProd);
  } else {
    response.status(404).json({ error: "Not Found!" });
  }
});

products.post("/", async (request, response) => {
  // console.log("POST request to /products");
  const newProd = await addNewProd(request.body);
  if (newProd.id) {
    response.status(200).json(newProd);
  } else {
    response.status(404).json({ error: "Can't add that! ),:" });
  }
});

products.delete("/:id", async (request, response) => {
  // console.log("DELETE request to /products/:id");
  const deletedProd = await deleteProd(request.params.id);
  if (deletedProd.id) {
    response.status(200).json(deletedProd);
  } else {
    response.status(404).json({ error: "Cannot Delete!" });
  }
});

products.put("/:id", async (request, response) => {
  // console.log("UPDATE request to /products/:id");
  const updatedProd = await updateProd(request.params.id, request.body);
  if (updatedProd.id) {
    response.status(200).json(updatedProd);
  } else {
    response.status(404).json({ error: "Cannot Update!" });
  }
});

module.exports = products;
