const {  DataTypes } = require("sequelize");
const {connection} = require("../../database");
const Usuario = connection.define(
  "usuario",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "3"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Usuario; 
