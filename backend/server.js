import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // connect to mongoDB

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

// err check middleware
app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
