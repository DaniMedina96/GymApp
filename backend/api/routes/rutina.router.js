const router = require("express").Router();


const { 
    createRutina,
    getOneRutina,
    getAllRutinas,
    updateOneRutina,
    deleteOneRutina,
    addEjercicioToRutina,
    getRutinasByUser

}
= require("../controllers/Rutina.controller")

router.post("/", createRutina)
router.get("/:id", getOneRutina)
router.get("/", getAllRutinas)
router.get("/:userId/rutinasUsuario", getRutinasByUser)
router.put("/:id", updateOneRutina)
router.delete("/:id", deleteOneRutina)
router.post("/:idEjercicio/:idRutina/listaEjercicios/", addEjercicioToRutina)


module.exports = router