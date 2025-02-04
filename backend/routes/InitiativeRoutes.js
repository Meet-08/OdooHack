import express from 'express';
import multer from 'multer';
import { Initiative } from '../models/Initiative.js';


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { name, description, id } = req.body;
        console.log(req.body);
        const newInitiative = new Initiative({
            title: name,
            description,
            image: req.file
                ? {
                    data: req.file.buffer,
                    contentType: req.file.mimetype,
                }
                : null, // Handle cases where no image is uploaded
            user: id
        });

        await newInitiative.save();
        res.status(201).json({ message: "Initiative created successfully!", initiative: newInitiative });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const initiatives = await Initiative.find();
        res.json(initiatives);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
