const User = require("../../api/models/usuario.model");
// const DatosUsuario = require("../../api/models/datos_usuario.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        const salt =  bcrypt.genSaltSync(10);
        req.body.password =  bcrypt.hashSync(req.body.password, salt);
        const user = await User.create(req.body)
        await user.createDatos_usuario()

        // const datosUsuario = await DatosUsuario.create({
        //     idUsuario: user.id,
        //     nombre: req.body.nombre,
        //     altura: req.body.altura,
        //     peso: req.body.peso,
        //     edad: req.body.edad,
        //     genero: req.body.genero,
        // })

        const token = jwt.sign({ correo: user.correo }, process.env.JWT_SECRET,{expiresIn: '1h'})

        res.status(201).json({
            message: "User created successfully",
            result: user,
            token: token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error signing up",
            result: error
        });
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                correo: req.body.correo
            }
        })
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                result: user
            });
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid password",
                result: user
            });
        }
        const token = jwt.sign({ correo: user.correo }, process.env.JWT_SECRET,{expiresIn: '1h'})
        res.status(200).json({
            message: "User logged in successfully",
            result: user,
            token: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error login in",
            result: error
        });
    }

}
module.exports = {signUp, login}