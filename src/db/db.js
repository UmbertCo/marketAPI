import Sequelize from 'sequelize';
import 'dotenv/config'
const connectionURI = process.env.DB_URI

export const sequelize = new Sequelize(connectionURI)
