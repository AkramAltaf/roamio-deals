import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import connectDB from "./config/db.js";

connectDB();
const app = express();
app.use(cookieParser());
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