import mongoose from "mongoose";

const emiPlanSchema = new mongoose.Schema({
  monthlyPayment: Number,
  tenure: Number,
  interestRate: Number,
  cashback: Number,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  variant: { type: String, required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  emiPlans: [emiPlanSchema],
});

const Product = mongoose.model("Product", productSchema);

// ✅ important — default export for ES modules
export default Product;
