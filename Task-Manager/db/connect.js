const mongoose = require('mongoose');



const connectDB = async (connectionString) => {
    try {
        const conn = await mongoose.connect(connectionString, {
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
// mongoose.connect(connectionString).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.log(`${err}` + '\n');
// });