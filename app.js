import dotenv from "dotenv";
dotenv.config();
import { initDB } from "./src/config/database.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.json({ ok: "true" }));
app.use(express.json());
app.listen(PORT, () => console.log(`Servidor funcionando ${PORT}`));
initDB().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}
);