const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Datos_Usuario = connection.define(
  "datos_usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genero: {
      type: DataTypes.ENUM("masculino", "femenino"),
      allowNull: true,
    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Datos_Usuario;
