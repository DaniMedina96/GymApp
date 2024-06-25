const { DataTypes } = require("sequelize");
const { connection } = require("../../database");
const Ejercicio = require("./ejercicio.model");

const Rutina = connection.define(
  "rutina",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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

// Definir la relación muchos-a-muchos con Ejercicio
Rutina.belongsToMany(Ejercicio, {
  through: "rel_rutina_ejercicio",
  as: "ejercicios",
  foreignKey: "idRutina",
  otherKey: "idEjercicio",
  timestamps: false, // Desactivar timestamps en la tabla intermedia
});

Ejercicio.belongsToMany(Rutina, {
  through: "rel_rutina_ejercicio",
  as: "rutinas",
  foreignKey: "idEjercicio",
  otherKey: "idRutina",
  timestamps: false, // Desactivar timestamps en la tabla intermedia
});

module.exports = Rutina;
