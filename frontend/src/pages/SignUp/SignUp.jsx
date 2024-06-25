import { Box, TextField , Button} from "@mui/material"
import { useState } from "react";
import { signUp } from "../../services/authService";
function SignUp() {

  const [nombre, setNombre] = useState('');
  const   [correo , setCorreo] = useState('');
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

  const handleSubmit = async() => {
    event.preventDefault();
    const formData = {
      nombre, correo, password
    }
    const result = await signUp(formData);
    console.log(result)
  }
  
  
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', width:"100%"}}>
        <h1>Sign Up</h1>
        <Box sx={{ display: "flex", flexDirection:"column", m: 2, width:"50%"}}>
          <TextField id="nombre-signup" onChange={handleNombre}  label="Nombre" variant="outlined" placeholder="Ingrese su nombre" />
          <TextField id="email-signup" onChange={handleCorreo}  label="Correo" variant="outlined" placeholder="correo@example.com" type="email"/>
          <TextField id="Password-signup" onChange={handlePassword}  label="Contraseña" variant="outlined"  placeholder="Contraseña" type="password"  />
          <Button type="submit"onClick={handleSubmit} variant="contained">Continuar</Button>
        </Box> 
      </Box>
    </form>
  
  )
}

export default SignUp 