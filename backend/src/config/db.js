const mongoose = require("mongoose")

const mongoDbUrl = "mongodb+srv://pariharnavneet90:mqVR8zCLZ4D5oQdU@cluster0.mkgs2jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mongoDbUrl = 'mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb = () => {
    return mongoose.connect(mongoDbUrl)
}

module.exports = { connectDb }