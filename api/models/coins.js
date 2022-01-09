'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coins extends Model {

    static associate(models) {
      coins.belongsTo(models.wallets, {
        foreignKey: 'wallet_id'
      })
      coins.hasMany(models.transaction, {
        foreignKey: 'coin_id'
      })
    }
  };
  coins.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};