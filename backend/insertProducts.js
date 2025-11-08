import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("✅ Connected to MongoDB");

  const productSchema = new mongoose.Schema({}, { strict: false });
  const Product = mongoose.model("Product", productSchema);

  const products = [
    {
      name: "Samsung Galaxy S24",
      variant: "128GB",
      mrp: 124900,
      price: 119900,
      image: "data:image/jpeg;base64,/YOUR_BASE64_IMAGE_HERE",
      emiPlans: [
        { monthlyPayment: 9992, tenure: 12, interestRate: 0, cashback: 2000 },
        { monthlyPayment: 5200, tenure: 24, interestRate: 10.5, cashback: 0 },
      ],
    },
    {
      name: "iPhone 15 Pro",
      variant: "256GB",
      mrp: 170000,
      price: 159999,
      image: "data:image/jpeg;base64,/YOUR_BASE64_IMAGE_HERE",
      emiPlans: [
        { monthlyPayment: 13333, tenure: 12, interestRate: 0, cashback: 2000 },
        { monthlyPayment: 8400, tenure: 24, interestRate: 10.5, cashback: 0 },
      ],
    },
  ];

  try {
    await Product.insertMany(products);
    console.log("✅ Products added successfully!");
  } catch (error) {
    console.error("❌ Error inserting products:", error);
  } finally {
    mongoose.disconnect();
  }
});
