const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Ejercicios = connection.define(
  "ejercicios",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grupo_muscular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Ejercicios;
