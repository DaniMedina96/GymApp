const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(
            {
                where: req.query
            })

        if (usuarios.length === 0) {    
            return res.status(404).json({
                message: "Users not found",
                result: usuarios
            });
        }
        ;
        res.status(200).json({
            message: "All users retrieved successfully",
            result: usuarios
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting all users",
            result: error
        });
    }
}

const getOneUser = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(
                req.params.id
            )
        if (!usuario) {
            return res.status(404).json({
                message: "User not found",
                result: usuario
            });
        }
        res.status(200).json({
            message: "User retrieved successfully",
            result: usuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving user",
            result: error
        });
    }
}

const updateOneUser = async (req, res) => {
    try {
        const [result] = await Usuario.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
        if (result === 0) {
            return res.status(404).json({
                message: "User not found",
                result: result
            });
        }
       // await result.update(req.body)
        res.status(200).json({
            message: "User updated successfully",
            result: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating user",
            result: error
        });
    }
}

const deleteOneUser = async (req, res) => {
    try {
        const result = await Usuario.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "User not found",
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

const createUser =  async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        
        const nuevoUsuario = await Usuario.create(req.body)
        

        res.status(201).json({
            message: "User created successfully",
            result: nuevoUsuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            result: error
        });
    }
}
module.exports = { 
    createUser,
    getOneUser,
    getAllUsers,
    updateOneUser,
    deleteOneUser
}