const router = require("express").Router();


const { 
    createEjercicio,
    getOneEjercicio,
    getAllEjercicios,
    updateOneEjercicio,
    deleteOneEjercicio,
    getEjerciciosByUser


}
= require("../controllers/Ejercicio.controller")
const { checkAuth, checkAdmin } = require("../middlewares");

router.post("/", createEjercicio)
router.get("/:id", getOneEjercicio)
router.get("/", getAllEjercicios)
router.put("/:id", updateOneEjercicio)
router.delete("/:id", deleteOneEjercicio)
router.post("/:id/rutina", checkAuth, checkAdmin)
router.get("/ejerciciosUsuario/:idUsuario", getEjerciciosByUser)


module.exports = router