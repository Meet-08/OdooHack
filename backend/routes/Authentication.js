import express from 'express';
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), async (req, res) => {
    try {
        const { fullname, email, phoneNo, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            phoneNo,
            password: hashedPassword,
            /* profilePic: req.file
                 ? {
                     data: req.file.buffer,
                     contentType: req.file.mimetype,
                 }
                 : null,
            */
        });

        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/profile-pic/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user || !user.profilePic) return res.status(404).send("Image not found");

        res.set("Content-Type", user.profilePic.contentType);
        res.send(user.profilePic.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { identity, password } = req.body;
        let user;
        if (identity.includes('@')) {
            user = await User.findOne({ email: identity });
        } else {
            user = await User.findOne({ phoneNo: identity });
        }

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        req.session.user = { id: user._id, email: user.email };
        res.json({ message: "Login successful", user: req.session.user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/me", (req, res) => {
    if (req.session?.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Logged out" });
    });
});

export default router;
