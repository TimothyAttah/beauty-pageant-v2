import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import { authRouters } from './routes/authRoutes.js';
import { contestantRoutes } from './routes/contestantRouters.js';

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello NICA NIGERIA');
});

app.use('/api/auth', authRouters);
app.use('/api/contestant', contestantRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
