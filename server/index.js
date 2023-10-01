import express from "express";
import dotenv from "dotenv";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/products", (req, res) => {
    res.send("Products page");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });