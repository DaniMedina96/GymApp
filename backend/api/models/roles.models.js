const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Roles = connection.define(
  "roles",
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

module.exports = Roles;

