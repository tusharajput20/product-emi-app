🛒 Product EMI App

The Product EMI App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It’s designed to help users explore products, check their details, and calculate EMI (Equated Monthly Installment) options easily.

This project demonstrates how a complete MERN setup connects the frontend and backend seamlessly — from managing APIs and handling database operations in Node.js to delivering a clean, responsive user experience in React with Tailwind CSS.

The app follows a modular and RESTful architecture, making it scalable, maintainable, and easy to extend. It can serve as a base for building larger e-commerce platforms or finance-related applications that involve installment or pricing logic.

🚀 Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for schema modeling)
API Type: REST API
Other Tools: Postman for API testing

⚙️ Setup & Run Instructions
1. Clone the repository
git clone https://github.com/your-username/product-emi-app.git
cd product-emi-app

2. Install dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3. Configure environment variables

Create a .env file inside the backend folder with:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Run the app

Start backend:

cd backend
npm start


Start frontend:

cd ../frontend
npm start


Open your browser:

http://localhost:3000

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product details
POST	/api/products	Add new product
PUT	/api/products/:id	Update existing product
DELETE	/api/products/:id	Remove product
📦 Example API Response

GET /api/products

[
  {
    "_id": "64f91c8b1b0b3e11d9e91c2a",
    "name": "iPhone 15",
    "price": 79999,
    "emi": 3333,
    "description": "Apple iPhone 15 with A16 Bionic chip",
    "image": "https://example.com/iphone15.jpg"
  }
]


GET /api/products/:id

{
  "_id": "64f91c8b1b0b3e11d9e91c2a",
  "name": "iPhone 15",
  "price": 79999,
  "emi": 3333,
  "description": "Apple iPhone 15 with A16 Bionic chip",
  "image": "https://example.com/iphone15.jpg"
}

🧩 Database Schema

Product Model

{
  name: { type: String, required: true },
  price: { type: Number, required: true },
  emi: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
}

🖥️ Folder Structure
product-emi-app/
 ┣ backend/
 ┃ ┣ config/
 ┃ ┃ ┗ db.js
 ┃ ┣ controllers/
 ┃ ┃ ┗ productcontroller.js
 ┃ ┣ models/
 ┃ ┃ ┗ product.js
 ┃ ┣ routes/
 ┃ ┃ ┗ productroutes.js
 ┃ ┣ server.js
 ┃ ┗ ...
 ┣ frontend/
 ┃ ┣ src/
 ┃ ┃ ┣ pages/
 ┃ ┃ ┃ ┣ Home.js
 ┃ ┃ ┃ ┗ ProductDetails.js
 ┃ ┃ ┣ App.js
 ┃ ┃ ┗ index.js
 ┃ ┗ ...
 ┗ README.md

✨ Key Features

View and browse all available products

Get detailed product information dynamically

Simple EMI calculation per product

RESTful backend with CRUD operations

Responsive and clean UI with Tailwind CSS

Organized codebase using MVC structure in backend

🔮 Future Enhancements

Add user authentication and login system

Include a cart or wishlist feature

Implement EMI calculation logic based on interest rate and tenure

Add admin dashboard for managing products

Deploy to a cloud platform (e.g., Render, Vercel, or Railway)
