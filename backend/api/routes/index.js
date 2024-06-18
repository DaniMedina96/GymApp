const router = require("express").Router();

const usuarioRouter = require("./usuario.router")
const planingRouter = require("./planing.router")
const ejercicioRouter = require("./ejercicio.router")
const rutinaRouter = require("./rutina.router")
const datos_usuarioRouter = require("./datos_usuario.router")
const grupo_muscularRouter = require("./grupo_muscular.router")
const rolRouter = require("./rol.router")

router.use("/usuarios", usuarioRouter)
router.use("/rutina", rutinaRouter)
router.use("/datos_usuario", datos_usuarioRouter)
router.use("/grupo_muscular", grupo_muscularRouter)
router.use("/rol", rolRouter)
router.use("/ejercicios", ejercicioRouter)
router.use("/planings", planingRouter)



module.exports = router