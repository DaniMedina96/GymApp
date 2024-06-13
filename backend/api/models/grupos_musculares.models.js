const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Grupos_musculares = connection.define(
  "grupos_musculares",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Grupos_musculares;
