const router = require("express").Router();

const usuarioRouter = require("./usuario.router")

router.use("/usuarios", usuarioRouter)

/*router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});*/

module.exports = router