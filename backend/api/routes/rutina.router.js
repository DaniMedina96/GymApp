const router = require("express").Router();


const { 
    createRutina,
    getOneRutina,
    getAllRutinas,
    updateOneRutina,
    deleteOneRutina

}
= require("../controllers/Rutina.controller")

router.post("/", createRutina)
router.get("/:id", getOneRutina)
router.get("/", getAllRutinas)
router.put("/:id", updateOneRutina)
router.delete("/:id", deleteOneRutina)


module.exports = router