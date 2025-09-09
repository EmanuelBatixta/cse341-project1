const express = require('express');
const db = require('./src/db/index.js')
const dotenv = require('dotenv');

// app configuration
dotenv.config();
const app = express();
app.use(express.json());


// routes
app.use('/contacts/', require('./src/routes/contactRoute.js'))


const PORT = process.env.PORT || 3300;
app.listen(PORT, ()=> {
    db()
    console.log(`🔥 Server running on http://localhost:${PORT} 🔥`)
})