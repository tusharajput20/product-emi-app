// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();

    const products = [
      {
        name: "iPhone 15 Pro",
        variant: "128GB",
        mrp: 150000,
        price: 139999,
        image: "https://example.com/iphone15.jpg",
        emiPlans: [
          { monthlyPayment: 11666, tenure: 12, interestRate: 0, cashback: 2000 },
          { monthlyPayment: 7200, tenure: 24, interestRate: 10.5, cashback: 0 },
        ],
      },
      {
        name: "Samsung S24 Ultra",
        variant: "256GB",
        mrp: 160000,
        price: 149999,
        image: "https://example.com/s24ultra.jpg",
        emiPlans: [
          { monthlyPayment: 12499, tenure: 12, interestRate: 0, cashback: 1500 },
          { monthlyPayment: 8000, tenure: 24, interestRate: 9.5, cashback: 0 },
        ],
      },
    ];

    await Product.insertMany(products);
    console.log("✅ Data Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error Seeding Data:", error);
    process.exit(1);
  }
};

seedProducts();
