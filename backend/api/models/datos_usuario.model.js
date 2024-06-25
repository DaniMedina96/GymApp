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

    },
    altura: {
      type: DataTypes.INTEGER,

    },
    edad: {
      type: DataTypes.INTEGER,

    },
    genero: {
      type: DataTypes.ENUM("masculino", "femenino"),

    },
    imagenPerfil: {
      type: DataTypes.STRING,

   

    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Datos_Usuario;
