import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/authService";
import './SignUp.css';

function SignUp() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleCorreo = (evento) => {
    setCorreo(evento.target.value)
  }

  const handlePassword = (evento) => {
    setPassword(evento.target.value)
  }

  const handleNombre = (evento) => {
    setNombre(evento.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      nombre, correo, password
    }
    const result = await signUp(formData);
    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <Box className="signup-form">
          <TextField id="nombre-signup" onChange={handleNombre} label="Nombre" variant="outlined" placeholder="Ingrese su nombre" fullWidth />
          <TextField id="email-signup" onChange={handleCorreo} label="Correo" variant="outlined" placeholder="correo@example.com" type="email" fullWidth />
          <TextField id="Password-signup" onChange={handlePassword} label="Contraseña" variant="outlined" placeholder="Contraseña" type="password" fullWidth />
          <Button type="submit" className="signup-button">Continuar</Button>
        </Box>
      </Box>
    </form>
  )
}

export default SignUp;
