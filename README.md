# 🍔 Food Delivery App (MERN Stack)

A full-stack Food Delivery web application built using the **MERN stack (MongoDB, Express, React, Node.js)**. Users can browse food items, add them to cart, and place orders seamlessly.

---

## 🚀 Features

### 👨‍🍳 User Features
- Browse food items
- View product details
- Add/remove items from cart
- Place orders
- User authentication (Login/Register)

### 🛠 Admin Features (Optional)
- Add/edit/delete food items
- Manage orders
- Dashboard overview

---

## 🏗️ Project Structure

```
food-delivery/
│
├── client/       # React Frontend
├── server/       # Node.js + Express Backend
└── README.md
```

---

## 🧰 Tech Stack

### Frontend:
- React.js
- Axios
- React Router
-  Tailwind CSS

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (Mongoose)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/food-delivery.git
cd food-delivery
```

---

### 2️⃣ Setup Backend (Server)
```bash
cd server
npm install
```

Create `.env` file inside `server`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm start
```

---

### 3️⃣ Setup Frontend (Client)
Open new terminal:
```bash
cd client
npm install
npm start
```

---

## 📦 Scripts

### Client:
```bash
npm start       # Run frontend
npm run build   # Build frontend
```

### Server:
```bash
npm start       # Run backend
npm run dev     # Run with nodemon (if configured)
```

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` folder:

```
PORT=5000
MONGO_URI=<your_mongodb_url>
JWT_SECRET=<your_secret>
```

---

## 🚀 Deployment

You can deploy using:
- Frontend: Vercel / Netlify
- Backend: Render / Railway / AWS
- Database: MongoDB Atlas

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pratik Dangi**  
Sr. Technical Analyst

---

## ⭐ Support

If you like this project, please ⭐ the repository!
