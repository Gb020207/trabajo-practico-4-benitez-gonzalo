import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
import sequelize from "./database.js";

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("servidor corriendo");
    await sequelize.sync();
  } catch (error) {
    console.log("Error al consultar la base de datos",error);
  }
};

export default sequelize;
