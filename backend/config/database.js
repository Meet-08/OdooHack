import mongoose from 'mongoose';


const mongoURI = 'mongodb://localhost:27017/OdooHack';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
