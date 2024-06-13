const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Datos_Usuario = connection.define(
  "datos_usuario",
  {
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genero: {
      type: DataTypes.ENUM("masculino", "femenino"),
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Datos_Usuario;
