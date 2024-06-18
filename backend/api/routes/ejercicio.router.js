const router = require("express").Router();


const { 
    createEjercicio,
    getOneEjercicio,
    getAllEjercicios,
    updateOneEjercicio,
    deleteOneEjercicio

}
= require("../controllers/Ejercicio.controller")

router.post("/", createEjercicio)
router.get("/:id", getOneEjercicio)
router.get("/", getAllEjercicios)
router.put("/:id", updateOneEjercicio)
router.delete("/:id", deleteOneEjercicio)


module.exports = router