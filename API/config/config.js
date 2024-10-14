require('dotenv').config();  // Load .env variables

module.exports = {
  development: {
    username: 'root',  // Local MySQL username
    password: 'Muriuki011',  // Local MySQL password
    database: 'customerProject',         // Local DB name
    host: '127.0.0.1',                   // Localhost
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',  // Environment variable for production
    password: process.env.DB_PASSWORD || 'Muriuki011',
    database: process.env.DB_NAME || 'customerProject',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};

