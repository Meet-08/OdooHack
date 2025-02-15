import express from 'express';
import multer from 'multer';
import { Initiative } from '../models/Initiative.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, description, id: userId } = req.body;
        const initiativeData = {
            title: name,
            description,
            user: userId,
        };
        if (req.file) {
            initiativeData.image = {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            };
        }
        const newInitiative = new Initiative(initiativeData);
        const savedInitiative = await newInitiative.save();
        await savedInitiative.populate('user');
        res.status(201).json({ message: 'Initiative created successfully!', initiative: savedInitiative });
    } catch (error) {
        console.error('Error creating initiative:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const initiatives = await Initiative.find().sort({ _id: -1 }).populate('user');
        res.json(initiatives);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/image/:id', async (req, res) => {
    try {
        const initiative = await Initiative.findById(req.params.id);
        if (!initiative?.image) return res.status(404).send('Image not found');
        res.set('Content-Type', initiative.image.contentType);
        res.send(initiative.image.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/vote/:id', async (req, res) => {
    try {
        const { userId } = req.body;
        const initiative = await Initiative.findById(req.params.id);
        if (!initiative) return res.status(404).json({ message: 'Initiative not found' });

        const index = initiative.likedBy.findIndex(id => id.toString() === userId);
        if (index > -1) {
            initiative.likedBy.splice(index, 1);
            initiative.voteCount = Math.max(initiative.voteCount - 1, 0);
        } else {
            initiative.likedBy.push(userId);
            initiative.voteCount += 1;
        }
        await initiative.save();
        res.json({ initiativeId: initiative._id, voteCount: initiative.voteCount, likedBy: initiative.likedBy });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/comment/:id', async (req, res) => {
    try {
        const initiative = await Initiative.findById(req.params.id);
        if (!initiative) return res.status(404).json({ message: 'Initiative not found' });
        res.json(initiative.comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/comment/:id', async (req, res) => {
    try {
        const { userId, comment } = req.body;
        const initiative = await Initiative.findById(req.params.id);
        if (!initiative) return res.status(404).json({ message: 'Initiative not found' });

        const newComment = {
            user: userId,
            comment,
            createdAt: new Date(),
        };
        initiative.comments = [...(initiative.comments || []), newComment];
        initiative.commentCount = initiative.comments.length;
        await initiative.save();
        res.status(201).json({ message: 'Comment added successfully!', comments: initiative.comments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
