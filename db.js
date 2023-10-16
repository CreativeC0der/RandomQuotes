const mongoose = require('mongoose')

async function connectDB() {
    try {
        const msg = await mongoose.connect(
            "mongodb+srv://shrijon:1234567890@cluster0.vi1eu1j.mongodb.net/MYDB?retryWrites=true&w=majority"
        );
        console.log('Connected');
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = connectDB;