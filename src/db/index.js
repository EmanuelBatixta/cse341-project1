const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();

const uri = process.env.MONGO_URI
let db_ok

const dbConnection = async () => {
    const result = await mongoose.connect(uri)
    try {
        if (result) {
            console.log("Connected to MongoDB")
            db_ok = true
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

module.exports = dbConnection