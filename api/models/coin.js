'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coin extends Model {

    static associate(models) {
      coin.belongsTo(models.wallet, {
        foreignKey: 'address'
      })
      coin.hasMany(models.transactions, {
        foreignKey: 'coin_id'
      })
    }
  };
  coin.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT,
    address_wallet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coin',
  });
  return coin;
};