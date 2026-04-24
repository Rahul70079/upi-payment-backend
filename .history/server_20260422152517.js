require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the UPI Payment API');
});

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});