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
router.post("/:id/listaEjercicios/", addEjercicioToRutina)


module.exports = router