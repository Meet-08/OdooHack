import express from 'express';
import Post from '../models/Initiative';


const router = express.Router();

// Like a post
router.post('/like/:postId', async (req, res) => {
    const { userId } = req.body;  // userId from request body or session
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).send('Post not found.');

        if (!post.likes.includes(userId)) {
            // User likes the post
            post.likes.push(userId);
            post.likeCount += 1;
        }

        await post.save();
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Add a comment to the post
router.post('/comment/:postId', async (req, res) => {
    const { userId, comment } = req.body;
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).send('Post not found.');

        post.comments.push({ userId, comment });
        await post.save();

        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

export default router;
