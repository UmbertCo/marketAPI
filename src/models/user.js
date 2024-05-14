import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    imageID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
});