import { Sequelize } from "sequelize";
import sequelize from '../db/db';
import Customer from "./customerModel";
import Project from "./projectModel";

Customer.hasMany(Project, {
    foreignKey: 'customerId',
    as: 'projects',
});

Project.belongsTo(Customer, {
    foreignKey: 'customerId',
    as: 'customer',
});

export { Customer, Project, sequelize };