import mongoose from 'mongoose';

const { Schema } = mongoose;

const schemeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    eligibility: {
        type: String,
    },
});


const Scheme = mongoose.model('Scheme', schemeSchema);

export default Scheme;
