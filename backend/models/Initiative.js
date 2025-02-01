import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  likes: { type: [String], default: [] }, // stores user IDs who liked the post
  comments: [{
    userId: { type: String, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }]
});

export const Post = mongoose.model('Post', PostSchema);
