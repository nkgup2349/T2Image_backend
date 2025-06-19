# T2Image Backend

This is the backend for **T2Image**, a full-stack AI image generation app using the **ClipDrop API**. It handles user accounts, credit management, payments via **Razorpay**, and routes image generation requests to the API.

## 🔗 Frontend Repository

👉 [T2Image Frontend](https://github.com/nkgup2349/T2Image_Frontend)

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Razorpay API**
- **ClipDrop API**
- **dotenv, cors, axios**

## ✨ Features

- User account creation/login (if applicable)
- Image generation via ClipDrop API
- Credit-based system (1 credit = 1 image)
- Razorpay integration to buy credits
- Secure API routing with proper environment config

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/nkgup2349/T2Image_backend.git
cd T2Image_backend
```

## 2. Install Dependencies
```bash
Copy
Edit
npm install

```
## 3. Environment Variables
Create a .env file in the root with:
```

PORT=5000
MONGODB_URI=your_mongo_connection_string
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

```

## 4. Run the Server
```bash
node server.js
```
Or use nodemon if installed:
```
Copy
Edit
nodemon server.js
```
##5. API Base URL
```
http://localhost:5000/
```
