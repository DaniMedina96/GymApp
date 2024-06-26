import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleCorreo = (evento) => {
    setCorreo(evento.target.value);
  };

  const handlePassword = (evento) => {
    setPassword(evento.target.value);
  };

  const handleSubmit = async () => {
    const formData = { correo, password };
    try {
      const result = await login(formData);
      console.log(result.result.id);
      localStorage.setItem("userId", result.result.id);  // Asegúrate de guardar el userId en localStorage
      navigate('/profile');
      console.log(formData);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed, please try again.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100%" }}>
      <h1>Login</h1>
      <Box sx={{ display: "flex", flexDirection: "column", m: 2, width: "50%" }}>
        <TextField id="email-login" onChange={handleCorreo} label="Correo" variant="outlined" placeholder="correo@example.com" />
        <TextField id="password-login" onChange={handlePassword} label="Contraseña" variant="outlined" placeholder="Contraseña" type="password" />
        <Button onClick={handleSubmit} variant="contained">Continuar</Button>
      </Box>
    </Box>
  );
}

export default Login;

