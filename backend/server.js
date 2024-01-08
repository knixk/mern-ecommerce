import express from "express";
import products from "./data/products.js";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
    // we are getting the id from the URL params
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
