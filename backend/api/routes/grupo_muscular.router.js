const router = require("express").Router();

const { 
    createGrupo_Muscular,
    getOneGrupo_Muscular,
    getAllGrupo_Muscular,
    updateOneGrupo_Muscular,
    deleteOneGrupo_Muscular

}
= require("../controllers/Grupo_Muscular.controller")

router.post("/", createGrupo_Muscular)
router.get("/:id", getOneGrupo_Muscular)
router.get("/", getAllGrupo_Muscular)
router.put("/:id", updateOneGrupo_Muscular)
router.delete("/:id", deleteOneGrupo_Muscular)

module.exports = router