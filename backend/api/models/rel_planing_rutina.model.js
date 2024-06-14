const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Rel_planing_rutina = connection.define(
  "rel_planing_rutina",
  {
    idPlaning: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    idRutina: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Rel_planing_rutina;
