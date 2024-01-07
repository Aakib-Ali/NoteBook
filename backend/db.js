const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("DB Connected to MongoDB successfully");
};

module.exports = connectToMongo;
