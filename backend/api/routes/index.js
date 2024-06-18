const router = require("express").Router();

const usuarioRouter = require("./usuario.router")
const ejercicioRouter = require("./ejercicio.router")

router.use("/usuarios", usuarioRouter)
router.use("/ejercicios", ejercicioRouter)

/*router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});*/

module.exports = router