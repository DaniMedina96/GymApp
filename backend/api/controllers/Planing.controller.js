const Planing = require("../../api/models/planing.model");


const getAllPlaning = async (req, res) => {
    const planing = await Planing.findAll(
    {where: req.query})

    if (planing.length === 0) {
        return res.status(404).json({
            message: "Planing not found",
            result: planing
        });
    }
    ;
    res.status(200).json({
        message: "All planing retrieved successfully",
        result: planing
    })
};

const getOnePlaning = async (req, res) => {
    try {
        const planing = await Planing.findByPk(
                req.params.id
            )
        if (!planing) {
            return res.status(404).json({
                message: "Planing not found",
                result: planing
            });
        }
        res.status(200).json({
            message: "Planing retrieved successfully",
            result: planing
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving planing",
            result: error
        });
    }
};


const updateOnePlaning = async (req, res) => {
    const [result] = await Planing.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
    if (result === 0) {
        return res.status(404).json({
            message: "Planing not found",
            result: result
        });
    }
    res.status(200).json({
        message: "Planing updated successfully",
        result: req.body
    })
};


const deleteOnePlaning = async (req, res) => {
    const result = await Planing.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
    if (result === 0) {
        return res.status(404).json({
            message: "Planing not found, can't be deleted",
            result: result
        });
    }
    res.status(200).json({
        message: "Planing deleted successfully",
        result: result
    })
};


const createPlaning = async (req, res) => {
    try {
        const nuevoPlaning = await Planing.create(req.body)
        res.status(201).json({
            message: "Planing created successfully",
            result: nuevoPlaning
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating planing",
            result: error
        });
    }
};


module.exports = {
    getAllPlaning,
    getOnePlaning,
    updateOnePlaning,
    deleteOnePlaning,
    createPlaning
};
