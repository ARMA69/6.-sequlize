"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allownNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      LastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allownNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allownNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.TEXT,
        allownNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isValidDate(value) {
            if (isAfter(new Data(value), new Date())) {
              throw new Error("Your birthday must be earliear than today");
            }
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
