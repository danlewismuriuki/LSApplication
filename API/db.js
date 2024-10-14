const { Sequelize } = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
});

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectToDb };

