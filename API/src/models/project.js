const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../db');
const Customer = require('./customer');

class Project extends Model { }

Project.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Project',
});

Project.belongsTo(Customer, {
    foreignKey: 'customerId',
    onDelete: 'CASCADE',
});

module.exports = Project;

