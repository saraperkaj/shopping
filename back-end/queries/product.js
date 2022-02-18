const { all } = require("../app");
const db = require("../db/dbConfig");

const getAllProd = async () => {
  try {
    const allProd = await db.any("SELECT * FROM product");
    return allProd;
  } catch (error) {
    return error;
  }
};

const getOneProd = async (id) => {
  try {
    const prod = await db.one("SELECT * FROM product WHERE id=$1", id);
    return prod;
  } catch (error) {
    return error;
  }
};

const addNewProd = async (prod) => {
  const { img, name, description, price, rating, featured } = prod;
  try {
    const newProd = await db.one(
      "INSERT INTO product (img, name, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [img, name, description, price, rating, featured]
    );
    return newProd;
  } catch (error) {
    return error;
  }
};

const deleteProd = async (id) => {
  try {
    const deleted = await db.one(
      "DELETE FROM product WHERE id=$1 RETURNING *",
      id
    );
    return deleted;
  } catch (error) {
    return error;
  }
};

const updateProd = async (id, product) => {
  const { img, name, description, price, rating, featured } = product;
  try {
    const updated = await db.one(
      "UPDATE product SET img=$2, name=$3, description=$4, price=$5, rating=$6, featured=$7 WHERE id=$1 RETURNING *",
      [id, img, name, description, price, rating, featured]
    );
    return updated;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProd,
  getOneProd,
  addNewProd,
  deleteProd,
  updateProd,
};
