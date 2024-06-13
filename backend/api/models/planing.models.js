const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Planing = connection.define(
  "planing",
  {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Planing;
