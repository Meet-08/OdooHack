import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/database.js'
import issueRoutes from './routes/issueRoutes.js'
import schemeRoutes from './routes/schemeRoutes.js'
import userRoutes from './routes/UserRoutes.js'
import PostRoutes from './routes/PostRoutes.js'
import { Scheme } from './models/Scheme.js';

const app = express();
const port = 3000;

connectDB();

const dummySchemes = [
    {
        name: "Green Energy Subsidy",
        description: "Incentives for individuals adopting renewable energy solutions.",
        eligibility: {
            age: { min: 25, max: 60 },
            income: { min: 100000, max: 900000 },
            caste: "General",
            gender: "Male",
            state: "Rajasthan",
            district: "Jaipur",
        }
    },
    {
        name: "Tech Startup Grant",
        description: "Financial aid for young entrepreneurs in the technology sector.",
        eligibility: {
            age: { min: 20, max: 40 },
            income: { min: 0, max: 1000000 },
            caste: "OBC",
            gender: "Female",
            state: "Telangana",
            district: "Hyderabad",
        }
    },
    {
        name: "Handicraft Promotion Scheme",
        description: "Support for artisans and traditional handicraft businesses.",
        eligibility: {
            age: { min: 25, max: 50 },
            income: { min: 50000, max: 500000 },
            caste: "SC",
            gender: "Male",
            state: "Odisha",
            district: "Bhubaneswar",
        }
    },
    {
        name: "Education for All Initiative",
        description: "Scholarships for students from economically weaker sections.",
        eligibility: {
            age: { min: 18, max: 28 },
            income: { min: 0, max: 200000 },
            caste: "ST",
            gender: "Female",
            state: "Assam",
            district: "Guwahati",
        }
    },
    {
        name: "Women Safety Fund",
        description: "Grants for initiatives ensuring safety and security for women.",
        eligibility: {
            age: { min: 18, max: 45 },
            income: { min: 0, max: 500000 },
            caste: "General",
            gender: "Female",
            state: "Maharashtra",
            district: "Mumbai",
        }
    },
    {
        name: "Rural Electrification Project",
        description: "Subsidies for providing electricity to rural households.",
        eligibility: {
            age: { min: 30, max: 60 },
            income: { min: 0, max: 300000 },
            caste: "OBC",
            gender: "Male",
            state: "Bihar",
            district: "Patna",
        }
    },
    {
        name: "Skill India Training Program",
        description: "Free vocational training for unemployed youth.",
        eligibility: {
            age: { min: 18, max: 35 },
            income: { min: 0, max: 250000 },
            caste: "General",
            gender: "Male",
            state: "Haryana",
            district: "Gurgaon",
        }
    },
    {
        name: "Healthcare Assistance Scheme",
        description: "Subsidized medical treatment for low-income families.",
        eligibility: {
            age: { min: 30, max: 70 },
            income: { min: 0, max: 400000 },
            caste: "ST",
            gender: "Female",
            state: "Chhattisgarh",
            district: "Raipur",
        }
    },
    {
        name: "Digital Literacy Program",
        description: "Courses for digital literacy and IT skills development.",
        eligibility: {
            age: { min: 15, max: 40 },
            income: { min: 0, max: 300000 },
            caste: "SC",
            gender: "Male",
            state: "Uttarakhand",
            district: "Dehradun",
        }
    },
    {
        name: "Housing for All",
        description: "Financial assistance for building low-cost housing for the poor.",
        eligibility: {
            age: { min: 25, max: 55 },
            income: { min: 0, max: 350000 },
            caste: "General",
            gender: "Female",
            state: "Jharkhand",
            district: "Ranchi",
        }
    }
];


app.use(cors());
app.use(express.json());

app.post("/load", async (req, res) => {
    try {
        const schemes = await Scheme.insertMany(dummySchemes);
        res.status(201).json(schemes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})


app.use('/api/issues', issueRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', PostRoutes);
app.use('/api/schemes', schemeRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
