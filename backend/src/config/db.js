const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoDbUrl)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};
module.exports = { connectDb }