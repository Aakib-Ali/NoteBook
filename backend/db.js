const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNoteBook";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("DB Connected to MongoDB successfully");
};

module.exports = connectToMongo;
