const router = require("express").Router();

const { 
    createPlaning,
    getOnePlaning,
    getAllPlaning,
    updateOnePlaning,
    deleteOnePlaning

}
= require("../controllers/Planing.controller")


router.get("/", getAllPlaning)
router.get("/:id", getOnePlaning)
router.post("/", createPlaning)
router.put("/:id", updateOnePlaning)
router.delete("/:id", deleteOnePlaning)



module.exports = router