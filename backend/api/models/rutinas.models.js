const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Rutinas = connection.define(
  "rutinas",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amateur: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Rutinas;
