'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {

    static associate(models) {
      wallet.hasMany(models.coin, {
        foreignKey: 'address_wallet'
      })
      wallet.hasMany(models.transactions, {
        foreignKey: 'address_wallet'
      })
    }
  };
  wallet.init({
    adress: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};