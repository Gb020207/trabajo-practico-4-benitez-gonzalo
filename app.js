import { initDB } from "./src/config/database.js";
import express from "express";
import router from "./src/routes/characters.routes.js";
import characters from "./src/models/characters.models.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => res.json({ ok: "true" }));
app.use(express.json());

initDB();

app.listen(PORT, () => console.log(`Servidor funcionando ${PORT}`));

