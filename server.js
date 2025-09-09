const express = require('express');
const db = require('./src/db/index.js')
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


// app configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


// routes
app.use('/contacts/', require('./src/routes/contactRoute.js'))


const PORT = process.env.PORT || 3300;
app.listen(PORT, ()=> {
    db()
    console.log(`🔥 Server running on http://localhost:${PORT} 🔥`)
})