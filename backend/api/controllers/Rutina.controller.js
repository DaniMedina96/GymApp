const Rutina = require("../models/rutina.model");
const Ejercicio = require("../models/ejercicio.model");

const createRutina = async (req, res) => {
  try {
    const { nombre, creador, amateur, ejercicios } = req.body;

    const nuevaRutina = await Rutina.create({
      nombre,
      creador,
      amateur,
    });

    if (ejercicios && ejercicios.length > 0) {
      const ejerciciosInstances = await Promise.all(
        ejercicios.map((id) => Ejercicio.findByPk(id))
      );

      const ejerciciosValidos = ejerciciosInstances.filter((e) => e != null);
      await nuevaRutina.addEjercicios(ejerciciosValidos);
    }

    res.status(201).json({
      message: "Rutina created successfully",
      rutina: nuevaRutina,
    });
  } catch (error) {
    console.error("Error creating rutina: ", error);
    res.status(500).json({
      message: "Error creating rutina",
      error: error,
    });
  }
};

const getAllRutinas = async (req, res) => {
  try {
    const rutinas = await Rutina.findAll({
      where: req.query,
      include: [{ model: Ejercicio, as: "ejercicios" }],
    });
    if (rutinas.length === 0) {
      return res.status(404).json({
        message: "Rutinas not found",
        result: rutinas,
      });
    }
    res.status(200).json({
      message: "All rutinas retrieved successfully",
      result: rutinas,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all rutinas",
      result: error,
    });
  }
};

const getOneRutina = async (req, res) => {
  try {
    const rutina = await Rutina.findByPk(req.params.id, {
      include: [{ model: Ejercicio, as: "ejercicios" }],
    });
    if (!rutina) {
      return res.status(404).json({
        message: "Rutina not found",
        result: rutina,
      });
    }
    res.status(200).json({
      message: "Rutina retrieved successfully",
      result: rutina,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving rutina",
      result: error,
    });
  }
};

const updateOneRutina = async (req, res) => {
  try {
    const [result] = await Rutina.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (result === 0) {
      return res.status(404).json({
        message: "Rutina not found",
        result: result,
      });
    }
    res.status(200).json({
      message: "Rutina updated successfully",
      result: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating rutina",
      result: error,
    });
  }
};

const deleteOneRutina = async (req, res) => {
  try {
    const result = await Rutina.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result === 0) {
      return res.status(404).json({
        message: "Rutina not found, can't be deleted",
        result: result,
      });
    }
    res.status(200).json({
      message: "Rutina deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting rutina",
      result: error,
    });
  }
};

const addEjercicioToRutina = async (req, res) => {
  try {
    const ejercicio = await Ejercicio.findByPk(req.params.idEjercicio);
    const rutina = await Rutina.findByPk(req.params.idRutina);
    if (!ejercicio) {
      return res.status(404).json({
        message: "Ejercicio not found",
        result: ejercicio,
      });
    }
    await ejercicio.addRutina(rutina);
    res.status(200).json({
      message: "Ejercicio added successfully",
      result: ejercicio,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding Ejercicio",
      result: error,
    });
  }
};

module.exports = {
  getAllRutinas,
  getOneRutina,
  updateOneRutina,
  deleteOneRutina,
  createRutina,
  addEjercicioToRutina,
};
