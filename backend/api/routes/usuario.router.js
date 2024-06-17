const router = require("express").Router();


const { 
    createUser,
    getOneUser,
    getAllUsers,
    updateOneUser,
    deleteOneUser

}
= require("../controllers/Usuario.controller")

router.post("/", createUser)
router.get("/:id", getOneUser)
router.get("/", getAllUsers)
router.put("/:id", updateOneUser)
router.delete("/:id", deleteOneUser)


module.exports = router