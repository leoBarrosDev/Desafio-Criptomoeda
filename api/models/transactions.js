'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {

    static associate(models) {
      transactions.belongsTo(models.wallet, {
        foreignKey: 'address'
      })
      transactions.belongsTo(models.coin, {
        foreignKey: 'id'
      })

    }
  };
  transactions.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    currentcotation: DataTypes.FLOAT,
    sendto: DataTypes.INTEGER,
    receivefrom: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    wallet_address: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};