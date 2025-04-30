'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
          notEmpty: true,
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
          notEmpty: true,
        },
      },
      manufacturedYear: {
        type: DataTypes.SMALLINT,
        validate: {
          isInt: true,
          min: 1990,
          max: new Date().getFullYear(),
        },
      },
      ramSize: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
          max: 128,
        },
      },
      cpu: DataTypes.STRING,
      screenDiagonal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 3.5,
          max: 8.0,
        },
      },
      isNfc: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
