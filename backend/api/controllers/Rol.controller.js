const Rol = require("../models/rol.model");
const bcrypt = require("bcrypt");


const createRol = async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.status(201).json({
            message: "Rol created successfully",
            result: rol,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating rol",
            result: error,
        });
    }
};
const getAllRoles = async (req, res) => {
        try {
                const roles = await Rol.findAll(
                        {
                                where: req.query
                        })  
                if (roles.length === 0) {    
                        return res.status(404).json({
                                message: "Roles not found",
                                result: roles
                        });
                }
                ;
                res.status(200).json({
                        message: "All roles retrieved successfully",
                        result: roles
                })
        } catch (error) {
                res.status(500).json({
                        message: "Error getting all roles",
                        result: error
                });
        }
}

const getOneRol = async (req, res) => {
    try {
        const rol = await Rol.findByPk(
                req.params.id
            )
        if (!rol) {
            return res.status(404).json({
                message: "Rol not found",
                result: rol
            });
        }
        res.status(200).json({
            message: "Rol retrieved successfully",
            result: rol
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting rol",
            result: error
        });
    }
}

const updateOneRol = async (req, res) => {
    try {
        const [result] = await Rol.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "Rol not found, can't be updated",
                result: result
            });
        }
        res.status(200).json({
            message: "Rol updated successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating rol",
            result: error
        });
    }
}

const deleteOneRol = async (req, res) => {
    try {
        const result = await Rol.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "Rol not found, can't be deleted",
                result: result
            });
        }
        res.status(200).json({
            message: "Rol deleted successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting rol",
            result: error
        });
    }
}

module.exports = {
    createRol,
    getAllRoles,
    getOneRol,
    updateOneRol,
    deleteOneRol
}