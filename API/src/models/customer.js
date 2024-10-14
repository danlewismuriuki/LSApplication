const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../db');

class Customer extends Model { }

Customer.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Customer',
});

module.exports = Customer;

