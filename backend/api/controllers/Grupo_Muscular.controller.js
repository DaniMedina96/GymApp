const Grupo_Muscular = require("../models/grupo_muscular.model");
const bcrypt = require("bcrypt");



const createGrupo_Muscular = async (req, res) => {
    try {
        const grupo_muscular = await Grupo_Muscular.create(req.body);
        res.status(201).json({
            message: "Grupo Muscular created successfully",
            result: grupo_muscular
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating grupo_muscular",
            result: error
        });
    }
}
const getAllGrupo_Muscular = async (req, res) => {
    try {
        const grupo_muscular = await Grupo_Muscular.findAll(
            {
                where: req.query
            })  
        if (grupo_muscular.length === 0) {    
            return res.status(404).json({
                message: "Grupo Muscular not found",
                result: grupo_muscular
            });
        }
        ;
        res.status(200).json({
            message: "All grupo_muscular retrieved successfully",
            result: grupo_muscular
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting all grupo_muscular",
            result: error
        });
    }
}

const getOneGrupo_Muscular = async (req, res) => {
    try {
        const grupo_muscular = await Grupo_Muscular.findByPk(
                req.params.id
            )
        if (!grupo_muscular) {
            return res.status(404).json({
                message: "Grupo Muscular not found",
                result: grupo_muscular
            });
        }
        res.status(200).json({
            message: "Grupo Muscular retrieved successfully",
            result: grupo_muscular
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving grupo_muscular",
            result: error
        });
    }
}

const updateOneGrupo_Muscular = async (req, res) => {
    try {
        const [result] = await Grupo_Muscular.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "Grupo Muscular not found, can't be updated",
                result: result
            });
        }
        res.status(200).json({
            message: "Grupo Muscular updated successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating grupo_muscular",
            result: error
        });
    }
}

const deleteOneGrupo_Muscular = async (req, res) => {
    try {
        const result = await Grupo_Muscular.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "Grupo Muscular not found, can't be deleted",
                result: result
            });
        }
        res.status(200).json({
            message: "Grupo Muscular deleted successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting grupo_muscular",
            result: error
        });
    }
}

module.exports = {
    createGrupo_Muscular,
    getAllGrupo_Muscular,
    getOneGrupo_Muscular,
    updateOneGrupo_Muscular,
    deleteOneGrupo_Muscular
}
