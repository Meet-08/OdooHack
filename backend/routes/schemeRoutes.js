import express from "express";
import { Scheme } from '../models/Scheme.js'

const router = express.Router();

router.get('/schemes', async (req, res) => {
    try {
        const allSchemes = await Scheme.find();
        res.status(200).json(allSchemes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// GET /schemes/filter?age=25&income=30000&caste=OBC&gender=Male&state=Maharashtra&district=Mumbai
router.get('/schemes/filter', async (req, res) => {
    try {
        const { age, income, caste, gender, state, district } = req.query;
        const filter = {};

        // If the query provides an age, find schemes where eligibility age range covers the given age
        if (age) {
            filter['eligibility.age.min'] = { $lte: Number(age) };
            filter['eligibility.age.max'] = { $gte: Number(age) };
        }

        // If the query provides an income, find schemes where eligibility income range covers the given income
        if (income) {
            filter['eligibility.income.min'] = { $lte: Number(income) };
            filter['eligibility.income.max'] = { $gte: Number(income) };
        }

        if (caste) {
            filter['eligibility.caste'] = caste;
        }

        if (gender) {
            filter['eligibility.gender'] = gender;
        }

        if (state) {
            filter['eligibility.state'] = state;
        }

        if (district) {
            filter['eligibility.district'] = district;
        }

        const schemes = await Scheme.find(filter);
        res.status(200).json(schemes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
