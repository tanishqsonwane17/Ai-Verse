const dotenv = require('dotenv').config()
const connectDB = require('./src/db/db')
connectDB()
const app = require('./src/app')
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});