const Ejercicio = require("../models/ejercicio.model");
const Usuario = require("../models/usuario.model");
const Rutina = require("../models/rutina.model");

const getAllEjercicios = async (req, res) => {
    console.log("Hola, estoy entrando a la funcion getAllEjercicios");
    try {
        const ejercicios = await Ejercicio.findAll(
            {
                where: req.query
            })

        if (ejercicios.length === 0) {    
            return res.status(404).json({
                message: "Ejercicio not found",
                result: ejercicios
            });
        }
        ;
        res.status(200).json({
            message: "All Ejercicios retrieved successfully",
            result: ejercicios
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting all Ejercicio",
            result: error
        });
    }
}

const getEjerciciosByUser = async (req, res) => {
    console.log("Estoy entrando a la función getEjerciciosByUser");
    try {
        const usuario = await Usuario.findByPk(req.params.userId);

        if (!usuario) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                result: null
            });
        }

        const rutinas = await usuario.getRutinas();
        let ejerciciosJSON = [];

        for (const rutina of rutinas) {
            const ejercicios = await rutina.getEjercicios();
            ejerciciosJSON.push(...ejercicios);  // Agregar ejercicios al array
        }

        console.log("Ejercicios JSON:", ejerciciosJSON);

        if (ejerciciosJSON.length > 0) {
            return res.status(200).json({
                message: "Ejercicios retrieved successfully",
                result: ejerciciosJSON
            });
        } else {
            return res.status(404).json({
                message: "El usuario no tiene ejercicios",
                result: ejerciciosJSON
            });
        }

    } catch (error) {
        console.error("Error al obtener los ejercicios del usuario:", error);
        return res.status(500).json({
            message: "Error al obtener los ejercicios del usuario",
            result: error.message
        });
    }
};


// const getEjerciciosByUser = async (req, res) => {
//     console.log("Estoy entrando a la función getEjerciciosByUser");
//     try {
//         const usuario = await Usuario.findOne({
//             where: { id: req.params.userId },
//             include: {
//                 model: Rutina,
//                 through: 'rel_rutina_usuario',
//                 include: {
//                     model: Ejercicio,
//                     through: 'rel_rutina_ejercicio',
//                 },
//             },
//         });

//         if (usuario && usuario.Rutinas.length > 0) {
//             const ejercicios = usuario.Rutinas.flatMap(rutina => rutina.Ejercicios);
//             if (ejercicios.length === 0) {
//                 return res.status(404).json({
//                     message: "El usuario no tiene ejercicios",
//                     result: ejercicios
//                 });
//             } else {
//                 return res.status(200).json({
//                     message: "Ejercicios retrieved successfully",
//                     result: ejercicios
//                 });
//             }
//         } else {
//             return res.status(404).json({
//                 message: "El usuario no tiene rutinas o no tiene ejercicios en las rutinas",
//                 result: usuario
//             });
//         }
//     } catch (error) {
//         return res.status(500).json({
//             message: "Error al obtener los ejercicios del usuario",
//             result: error.message
//         });
//     }
// };


// const getEjerciciosByUser = async (req, res) => {
//     console.log("Estoy entrando a la funcion getEjerciciosByUser");
//     try {
       
//         const usuario = await Usuario.findAll(
//             {
//                 where: req.query,
//                 include: {
//                     model: Ejercicio ,
//                     as: 'Ejercicios',
//                     through: 'rel_ejercicio_usuario',
                    
//                 },
//             })
//             console.log(usuario)

//         if (usuario.length === 0) {
//             return res.status(404).json({
//                 message: "El usuario no tiene ejercicios",
//                 result: usuario
//             })
//         }
//         res.status(200).json({
//             message: "Ejercicios retrieved successfully",
//             result: usuario
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Error al obtener os ejercicios del usuario",
//             result: error   
//         })}
// }



const getOneEjercicio = async (req, res) => {
    try {
        const ejercicio = await Ejercicio.findByPk(
                req.params.id
            )
        if (!ejercicio) {
            return res.status(404).json({
                message: "Ejercicio not found",
                result: ejercicio
            });
        }
        res.status(200).json({
            message: "Ejercicio retrieved successfully",
            result: ejercicio
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving Ejercicio",
            result: error
        });
    }
}

const updateOneEjercicio = async (req, res) => {
    try {
        const [result] = await Ejercicio.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
        if (result === 0) {
            return res.status(404).json({
                message: "Ejercicio not found",
                result: result
            });
        }
       // await result.update(req.body)
        res.status(200).json({
            message: "Ejercicio updated successfully",
            result: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating Ejercicio",
            result: error
        });
    }
}

const deleteOneEjercicio = async (req, res) => {
    try {
        const result = await Ejercicio.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        if (result === 0) {
            return res.status(404).json({
                message: "Ejercicio not found, can't be deleted",
                result: result
            });
        }
        res.status(200).json({
            message: "Ejercicio deleted successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Ejercicio",
            result: error
        });
    }
}

const createEjercicio =  async (req, res) => {
    try {
        const nuevoEjercicio = await Ejercicio.create(req.body)
        

        res.status(201).json({
            message: "Ejercicio created successfully",
            result: nuevoEjercicio
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating Ejercicio",
            result: error
        });
    }
}


module.exports = { 
    createEjercicio,
    getOneEjercicio,
    getAllEjercicios,
    updateOneEjercicio,
    deleteOneEjercicio,
    getEjerciciosByUser

}