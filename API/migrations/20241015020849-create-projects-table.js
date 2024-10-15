'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create the Projects table
    await queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers', // Make sure this matches the table name of Customers
          key: 'id',
        },
        onDelete: 'CASCADE', // Automatically delete projects if the customer is deleted
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    // Drop the Projects table
    await queryInterface.dropTable('Projects');
  }
};
