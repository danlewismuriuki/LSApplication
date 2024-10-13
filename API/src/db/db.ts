import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

if (
    !process.env.DB ||
    !process.env.USERNAME ||
    !process.env.PASSWORD ||
    !process.env.HOST ||
    !process.env.DB_DIALECT
) {
    throw new Error("Missing required environment variables. Please check your .env file.");
}



const sequelize = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: (process.env.DB_DIALECT || 'postgres') as 'postgres', // || 'postgres'

});

export default sequelize;