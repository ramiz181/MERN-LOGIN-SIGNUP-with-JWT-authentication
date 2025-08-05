import express from 'express'
import router from './routes/authRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

// console.log("DOTENV yhan sy connect ho rhi h", process.env, "yhan tk mil rhi h ");



const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173', // or '*'
    credentials: true
}));


app.use('/api/auth', router)

app.listen(3000);