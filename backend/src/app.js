const express = require('express');
const app = express()
const cors = require('cors')
const authRoutes = require('./routes/auth.routes');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use('/api/auth', authRoutes);
module.exports= app;

