import dotenv from 'dotenv';
dotenv.config();
import initDB from './src/config/db.js';
import express from 'express';

initDB();

const app = express();
const PORT = process.env.DB_HOST || 4000;

app.get('/', (req, res) => res.json ({ok: 'true'}))
app.use(express.json());
app.listen(PORT, () => console.log("Servidor funcionando" +PORT));
