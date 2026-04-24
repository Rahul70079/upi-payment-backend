<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>UPI Payment Backend</title>
</head>
<body>

<h1>💳 UPI Payment Backend (MERN)</h1>

<p>
A secure backend system for handling UPI-based peer-to-peer transactions.<br>
Includes authentication, wallet management, and transaction processing APIs.
</p>

<hr>

<h2>🌟 Features</h2>
<ul>
  <li>🔐 <b>User Authentication</b> – JWT-based secure login & registration</li>
  <li>🆔 <b>Dynamic UPI IDs</b> – Unique UPI ID for each user (e.g., user@payflow)</li>
  <li>🔑 <b>MPIN Security</b> – 4-digit MPIN verification (bcrypt hashed)</li>
  <li>💸 <b>Peer-to-Peer Transfers</b> – Send money via phone number or UPI ID</li>
  <li>💰 <b>Wallet Top-Up</b> – Add funds using API</li>
  <li>📱 <b>Utility Payments</b> – Mobile recharge & electricity bill APIs</li>
  <li>📊 <b>Transaction History</b> – Complete record of all transactions</li>
  <li>📄 <b>Swagger Docs</b> – Interactive API documentation</li>
  <li>📬 <b>Postman Collection</b> – Pre-configured API testing setup</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><b>Node.js + Express.js</b> – Backend framework</li>
  <li><b>MongoDB + Mongoose</b> – Database & ORM</li>
  <li><b>bcryptjs</b> – Password & MPIN hashing</li>
  <li><b>JWT (JSON Web Token)</b> – Authentication</li>
  <li><b>Swagger UI</b> – API documentation</li>
</ul>

<hr>

<h2>🚀 Getting Started</h2>

<h3>1. Install Dependencies</h3>
<pre>npm install</pre>

<h3>2. Configure Environment Variables</h3>
<pre>
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/upi-payment-backend
JWT_SECRET=your_secret_key
</pre>

<h3>3. Generate Swagger Docs</h3>
<pre>npm run swagger</pre>

<h3>4. Seed Dummy Data (Optional)</h3>
<pre>npm run seed</pre>

<p><b>Sample Users:</b></p>
<ul>
  <li>rahul@example.com (UPI: rahul178@payflow | Balance: 500)</li>
  <li>priyanshu@example.com (UPI: priyanshu567@payflow | Balance: 200)</li>
  <li>rahul@example.com (UPI: rahul789@payflow | Balance: 100)</li>
  <li>mohit@example.com (UPI: mohit012@payflow | Balance: 450)</li>
</ul>

<p><b>Default Credentials:</b></p>
<ul>
  <li>Password: password123</li>
  <li>MPIN: 1234</li>
</ul>

<h3>5. Run the Server</h3>
<pre>
# Production
npm start

# Development
npm run dev
</pre>

<p>Server runs at: <b>http://localhost:3000</b></p>

<hr>

<h2>📖 API Endpoints</h2>

<h3>🔐 Auth Routes (/api/auth)</h3>
<ul>
  <li><b>POST /register</b> – Register user</li>
  <li><b>POST /login</b> – Login & get JWT token</li>
  <li><b>GET /profile</b> – Get user details (requires token)</li>
  <li><b>POST /setup-mpin</b> – Set MPIN (requires token)</li>
</ul>

<h3>💸 Transaction Routes (/api/transactions)</h3>
<ul>
  <li><b>POST /send</b> – Send money (requires token)</li>
</ul>

<pre>
{
  "receiverIdentifier": "phone_or_upi",
  "amount": 1000,
  "mpin": "1234"
}
</pre>

<ul>
  <li><b>GET /history</b> – Get transaction history (requires token)</li>
</ul>

<h3>💰 Wallet Routes (/api/wallet)</h3>
<ul>
  <li><b>POST /add-money</b> – Add money (requires token)</li>
</ul>

<pre>
{
  "amount": 1000
}
</pre>

<ul>
  <li><b>POST /pay-bill</b> – Pay utility bills (requires token)</li>
</ul>

<pre>
{
  "billerName": "electricity",
  "amount": 500,
  "mpin": "1234"
}
</pre>

<hr>

<h2>🔍 API Usage</h2>

<h3>📄 Swagger Docs</h3>
<p>http://localhost:3000/api-docs</p>

<h3>📬 Postman Setup</h3>
<ol>
  <li>Open Postman</li>
  <li>Import <code>postman_collection.json</code></li>
  <li>Run Login API</li>
</ol>

<p>Token auto-saved as <code>{{token}}</code></p>

<ul>
  <li>Add Money</li>
  <li>Send Money</li>
  <li>Pay Bills</li>
</ul>

<hr>

<h2>🚀 Future Enhancements</h2>
<ul>
  <li>OTP verification</li>
  <li>Transaction rollback</li>
  <li>Rate limiting</li>
  <li>Email/SMS notifications</li>
</ul>

<hr>

<h2>📬 Postman Integration (Automated Testing)</h2>

<ol>
  <li>Open Postman</li>
  <li>Click on <b>Import</b></li>
  <li>Select <code>postman_collection.json</code></li>
  <li>Open the <b>Authentication</b> folder</li>
  <li>Run the <b>Login User</b> request</li>
</ol>

<p>
After login, the JWT token is automatically captured and stored in the environment as <code>{{token}}</code>.
</p>

<p>
This allows you to directly test all protected routes without manually adding the Bearer token each time.
</p>

<ul>
  <li>💰 Add Money</li>
  <li>💸 Send Money</li>
  <li>📱 Pay Bills</li>
</ul>

<p>
✅ Postman automatically handles authentication for all requests.
</p>


</body>
</html>
