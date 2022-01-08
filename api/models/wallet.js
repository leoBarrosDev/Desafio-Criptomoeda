'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  wallet.init({
    address: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    coins: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};