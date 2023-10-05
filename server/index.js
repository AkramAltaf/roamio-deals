import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { products } from "./data/products.js";

connectDB();
const app = express();
app.use(cookieParser());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });