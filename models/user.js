'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Customer)
    }
  }
  User.init({
    CustomerId: DataTypes.INTEGER,
    dateOfBirth: DataTypes.DATE,
    phoneNumber: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};