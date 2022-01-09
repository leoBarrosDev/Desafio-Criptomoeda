'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wallet_id: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          model: 'wallets', key: 'address'
        }
      },
      coin_id: {
        allowNull: false,
        type: sequelize.INTEGER,
        references: {
          model: 'coins', key: 'id'
        }
      },
      value: {
        type: Sequelize.FLOAT
      },
      datetime: {
        type: Sequelize.DATE
      },
      currentCotation: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};