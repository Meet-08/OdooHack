import mongoose, { Types } from 'mongoose'

const EligibilitySchema = new mongoose.Schema({
    age: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    income: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    caste: {
        type: String,
        enum: ['SC', 'ST', 'OBC', 'General'],
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    scheme: {
        type: Types.ObjectId,
        ref: 'Scheme'
    }
});


const SchemeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    eligibility: { type: EligibilitySchema, required: true },
},
    {
        timestamps: true
    });

export const Scheme = mongoose.model('Scheme', SchemeSchema);
