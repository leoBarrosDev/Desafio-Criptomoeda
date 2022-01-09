'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallets extends Model {


    static associate(models) {
      wallets.hasMany(models.coins, {
        foreignKey: 'wallets_id'
      })
      wallets.hasMany(models.transactions, {
        foreignKey: 'wallet_id'
      })
    }
  };
  wallets.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wallets',
  });
  return wallets;
};