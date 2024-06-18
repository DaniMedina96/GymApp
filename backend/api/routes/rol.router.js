const router = require("express").Router();


const { 
    createRol,
    getOneRol,
    getAllRoles,
    updateOneRol,
    deleteOneRol

}
= require("../controllers/Rol.controller")

router.post("/", createRol)
router.get("/:id", getOneRol)
router.get("/", getAllRoles)
router.put("/:id", updateOneRol)
router.delete("/:id", deleteOneRol)

module.exports = router