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

// // Create a schema for form data
// const formSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     message: String
// });

// // Create a model from the schema
// const FormData = mongoose.model('FormData', formSchema);

// // POST route to save form data
// app.post('/submit-form', (req, res) => {
//     const { name, email, message } = req.body;

//     const newFormData = new FormData({ name, email, message });

//     newFormData.save()
//         .then(() => res.json({ message: 'Data saved successfully!' }))
//         .catch((error) => res.status(500).json({ error: 'Error saving data' }));
// });

export default router;
