import express from 'express';
import { User } from '../models/User.js';

const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const { fullname, email, dob, gender, phoneNo } = req.body;
        const newUser = await User.create({ fullname, email, dob, gender, phoneNo });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/users', async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router;
