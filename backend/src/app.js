const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const aiRoutes = require('./routes/ai.routes')

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use('/api/auth', authRoutes);
app.use('/api/ai',aiRoutes)
module.exports= app;

