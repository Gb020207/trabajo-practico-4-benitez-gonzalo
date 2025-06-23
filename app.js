import express from 'express';
import dotenv from 'dotenv';
import initDB from './src/config/db.js';
dotenv.config();
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DIALECT)
console.log(process.env.DB_USER)
initDB();

const app = express();
const PORT = process.env.DB_HOST || 4001;

app.get('/', (req, res) => res.json ({ok: 'true'}))
app.use(express.json());
app.listen(PORT, () => console.log("Servidor funcionando" +PORT));
