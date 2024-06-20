const router = require("express").Router();


const { 
    createRutina,
    getOneRutina,
    getAllRutinas,
    updateOneRutina,
    deleteOneRutina,
    addEjercicioToRutina

}
= require("../controllers/Rutina.controller")

router.post("/", createRutina)
router.get("/:id", getOneRutina)
router.get("/", getAllRutinas)
router.put("/:id", updateOneRutina)
router.delete("/:id", deleteOneRutina)
router.post("/:idEjercicio/:idRutina/listaEjercicios/", addEjercicioToRutina)
//comentairo

module.exports = router