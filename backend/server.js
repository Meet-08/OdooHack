import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/database.js'
import issueRoutes from './routes/issueRoutes.js'
import userRoutes from './routes/UserRoutes.js'

const app = express();
const port = 3000;

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/issues', issueRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/schemes', schemeRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
