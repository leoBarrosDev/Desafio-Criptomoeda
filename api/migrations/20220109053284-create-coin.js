'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      amont: {
        type: Sequelize.FLOAT
      },
      address_wallet: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wallets', key: 'address'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coins');
  }
};