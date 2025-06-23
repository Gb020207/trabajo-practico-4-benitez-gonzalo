import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const characters = sequelize.define("Characters",{
    name: {type: DataTypes.STRING(200), allowNull: false},
    ki:{type: DataTypes.FLOAT, allowNull:false},
    race:{type: DataTypes.STRING(30), allowNull: false},
    gender:{type: DataTypes.STRING(10), allowNull: false},
    description:{type: DataTypes.STRING},
}
);

export default characters;