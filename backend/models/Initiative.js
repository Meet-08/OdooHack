import mongoose from 'mongoose'

const InitiativeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        data: Buffer,
        contentType: String
    },
    voteCount: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    commentCount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },

})

export const Initiative = mongoose.model('Initiative', InitiativeSchema);
