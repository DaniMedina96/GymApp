const router = require("express").Router();
const { 
    createDatos_Usuario,
    getAllDatos_Usuario,
    getOneData_Usuario,
    updateOneDatos_Usuario,
    deleteOneDatos_Usuario

}= require("../controllers/Datos_Usuario.controller")


router.post("/", createDatos_Usuario)
router.get("/:id", getOneData_Usuario)
router.get("/", getAllDatos_Usuario)
router.put("/:id", updateOneDatos_Usuario)
router.delete("/:id", deleteOneDatos_Usuario)




module.exports = router