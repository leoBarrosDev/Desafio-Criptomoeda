'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {

    static associate(models) {
      transactions.belongsTo(models.coins, {
        foreignKey: 'coin_id'
      })
      transactions.belongsTo(models.wallets, {
        foreignKey: 'wallet_id'
      })
    }
  };
  transactions.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    currentCotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};