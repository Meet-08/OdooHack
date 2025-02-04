import express from 'express';
import cors from 'cors';
import session from 'express-session';
import MongoStore from "connect-mongo";
import connectDB from './config/database.js'
import Authentication from './routes/Authentication.js'
import issueRoutes from './routes/issueRoutes.js'
import schemeRoutes from './routes/schemeRoutes.js'
import InitiativeRoutes from './routes/InitiativeRoutes.js'

const app = express();
const port = 3000;

connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: '626c06b529d53406b29ec23f6be59eb16f4890fc701e0cf5efa36e23264a004fff6d0ac27f0cec801ee94fcae9571c822cfa7ab04ad3bf1ae53b53bf5fd1b136',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/OdooHack",
        collectionName: "sessions",
    }),
    cookie: {
        httpOnly: true,
        secure: false, //Make it true when deploy
        maxAge: 1000 * 60 * 60 * 24,
    }
}));

app.use(express.json());


app.use('/api/auth', Authentication)
app.use('/api/issues', issueRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/initiatives', InitiativeRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
