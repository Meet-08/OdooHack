import mongoose from 'mongoose';

const { Schema } = mongoose;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    status: {
        type: String,
        default: 'Pending',
    },
});

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;
