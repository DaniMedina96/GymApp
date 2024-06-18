const router = require("express").Router();

const usuarioRouter = require("./usuario.router")
const planingRouter = require("./planing.router")

router.use("/usuarios", usuarioRouter)
router.use("/planings", planingRouter)

/*router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});*/

module.exports = router