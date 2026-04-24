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
