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
      value: {
        type: Sequelize.FLOAT
      },
      datetime: {
        type: Sequelize.DATE
      },
      currentcotation: {
        type: Sequelize.FLOAT
      },
      sendto: {
        type: Sequelize.INTEGER
      },
      receivefrom: {
        type: Sequelize.INTEGER
      },
      coin_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coins', key: 'id'
        }
      },
      wallet_address: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wallets', key: 'address'
        }
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