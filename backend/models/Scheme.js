const schemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eligibilityCriteria: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    authorityContact: {
        name: { type: String, required: true },
        email: { type: String, required: false },
        phone: { type: String, required: true },
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Scheme = mongoose.model("Scheme", schemeSchema);
