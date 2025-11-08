import express from "express";
import { getProducts, getProductById } from "../controllers/productcontroller.js";

const router = express.Router();

// Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
