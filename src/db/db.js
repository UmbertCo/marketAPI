import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'market',
    'postgres',
    'GSMunlock1.',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)