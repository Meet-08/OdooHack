import mongoose from 'mongoose';


const mongoURI = 'mongodb+srv://vgecwork:smys%401120@work.ool68.mongodb.net/OdooHack?retryWrites=true&w=majority&appName=Work';

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
