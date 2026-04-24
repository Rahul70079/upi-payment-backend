# UPI Payment Backend (MERN)

A secure backend system for handling UPI-based peer-to-peer transactions. 
Includes authentication, wallet management, and transaction processing APIs.


## 🌟 Full Feature Set

- 🔐 **User Authentication**  
  Secure JWT-based registration and login system  

- 🆔 **Dynamic UPI IDs**  
  Automatically generates a unique UPI ID for each user (e.g., user@payflow)  

- 🔑 **MPIN Security**  
  All transactions require a secure 4-digit MPIN verification (bcrypt hashed)  

- 💸 **Peer-to-Peer Transfers**  
  Send money using:
  - 10-digit phone number  
  - UPI ID  

- 💰 **Wallet Top-Up**  
  Simulate adding funds to user wallet via a top-up API  

- 📱 **Utility Bill Payments**  
  Mock APIs for mobile recharge and electricity bill payments with proper transaction logging  

- 📊 **Transaction History**  
  View complete history of transfers, deposits, and bill payments  

- 📄 **Swagger API Docs**  
  Interactive API documentation for testing endpoints  

- 📬 **Postman Collection**  
  Ready-to-use Postman setup with environment configuration

   ## 🛠️ Tech Stack

- **Node.js + Express.js** – Backend framework  
- **MongoDB + Mongoose** – Database and ORM  
- **bcryptjs** – Password & MPIN hashing  
- **JWT (JSON Web Token)** – Authentication & session management  
- **Swagger UI** – API documentation

  ## 🚀 Getting Started

### 1️⃣ Install Dependencies
Run the following command in the root directory:

```bash
npm install

2️⃣ Configure Environment Variables

Create a .env file in the root folder and add:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/upi-payment-backend
JWT_SECRET=your_secret_key

3️⃣ Generate Swagger Docs
Refresh the static UI configurations mapping to your local ports by executing:
npm run swagger

4️⃣ Seed Dummy Data (Optional)
We recommend loading our starter pack database so you don't have to repeatedly register fake accounts! Run:
npm run seed

Sample Users:

amit@example.com
 (UPI: amit123@payflow | Balance: 5000)
priya@example.com
 (UPI: priya456@payflow | Balance: 3000)
rahul@example.com
 (UPI: rahul789@payflow | Balance: 1500)
neha@example.com
 (UPI: neha012@payflow | Balance: 8000)

Default Credentials:

Password: password123
MPIN: 1234

5️⃣ Run the Server
# Production
npm start

# Development (auto-reload)
npm run dev

Server will run at:
👉 http://localhost:3000

## 📖 API Endpoints Summary

### 🔐 Auth Routes (`/api/auth`)

- **POST `/register`**  
  Register a new user and generate a unique UPI ID  

- **POST `/login`**  
  Authenticate user and return a JWT token  

- **GET `/profile`**  
  Fetch authenticated user details and MPIN status *(requires token)*  

- **POST `/setup-mpin`**  
  Set or update a secure 4-digit MPIN *(requires token)*

### 💸 Transaction & P2P Routes (`/api/transactions`)

- **POST `/send`**  
  Transfer money to another user using:
  - Phone number  
  - UPI ID  
  *(requires token)*  

  **Request Body:**
  ```json
  {
    "receiverIdentifier": "phone_or_upi",
    "amount": 1000,
    "mpin": "1234"
  }

GET /history
Retrieve complete transaction history including transfers and bill payments
(requires token)

### 💸 Transaction & P2P Routes (`/api/transactions`)

- **POST `/send`**  
  Transfer money to another user using:
  - Phone number  
  - UPI ID  
  *(requires token)*  

  **Request Body:**
  ```json
  {
    "receiverIdentifier": "phone_or_upi",
    "amount": 1000,
    "mpin": "1234"
  }

GET /history
Retrieve complete transaction history including transfers and bill payments
(requires token)

Wallet & Utility Routes (/api/wallet)

POST /add-money
Add funds to the user’s wallet
(requires token)

Request Body:
{
  "amount": 1000
}

POST /pay-bill
Pay utility bills like mobile recharge or electricity
(requires token)

Request Body:
{
  "billerName": "electricity",
  "amount": 500,
  "mpin": "1234"
}

## 🔍 Interacting with the API

### 📄 Swagger Documentation

Access the interactive API docs at:
👉 http://localhost:5000/api-docs  

Use Swagger UI to:
- View all available endpoints  
- Check request/response formats  
- Test APIs directly from the browser  

---

### 📬 Postman Setup (Automated Testing)

1. Open Postman  
2. Click **Import**  
3. Select `postman_collection.json`  
4. Open the **Authentication** folder  
5. Run the **Login User** request  

✅ After login, the JWT token is automatically saved in the environment as `{{token}}`  

👉 You can now directly test:
- Add Money  
- Send Money  
- Pay Bills  

No need to manually set the Bearer token each time.
