const Datos_Usuario = require("../models/datos_usuario.model");
const bcrypt = require("bcrypt");

const createDatos_Usuario = async (req, res) => {
    try {
        const datos_Usuario = await Datos_Usuario.create(req.body);
        res.status(201).json({
            message: "User created successfully",
            result: datos_Usuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            result: error
        });
    }
}

const getAllDatos_Usuario = async (req, res) => {
    try {
        const datos_Usuario = await Datos_Usuario.findAll(
            {
                where: req.query
            })
        if (datos_Usuario.length === 0) {    
            return res.status(404).json({
                message: "Users not found",
                result: datos_Usuario
            });
        }
        ;
        res.status(200).json({
            message: "All users retrieved successfully",
            result: datos_Usuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting all users",
            result: error
        });
    }
}

const getOneData_Usuario = async (req, res) => {
    try {
        const datos_Usuario = await Datos_Usuario.findByPk(
                req.params.id
            )
        if (!datos_Usuario) {
            return res.status(404).json({
                message: "User not found",
                result: datos_Usuario
            });
        }
        res.status(200).json({
            message: "User retrieved successfully",
            result: datos_Usuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving user",
            result: error
        });
    }
}

const updateOneDatos_Usuario = async (req, res) => {
    try {
        const [result] = await Datos_Usuario.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "User not found, can't be updated",
                result: result
            });
        }
        res.status(200).json({
            message: "User updated successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating user",
            result: error
        });
    }
}

const deleteOneDatos_Usuario = async (req, res) => {
    try {
        const result = await Datos_Usuario.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "User not found, can't be deleted",
                result: result
            });
        }
        res.status(200).json({
            message: "User deleted successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            result: error
        });
    }
}

module.exports = {
    createDatos_Usuario,
    getAllDatos_Usuario,
    getOneData_Usuario,
    updateOneDatos_Usuario,
    deleteOneDatos_Usuario
}
