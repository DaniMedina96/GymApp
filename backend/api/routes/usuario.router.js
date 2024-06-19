const router = require("express").Router();


const { 
    createUser,
    getOneUser,
    getAllUsers,
    updateOneUser,
    deleteOneUser

}
= require("../controllers/Usuario.controller");
const { checkAuth,checkAdmin } = require("../middlewares");

router.post("/", createUser)
router.get("/:id", getOneUser)
router.get("/", checkAuth, checkAdmin, getAllUsers)
router.put("/:id", updateOneUser)
router.delete("/:id", deleteOneUser)


module.exports = router