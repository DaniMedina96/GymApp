import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import './Login.css';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <Box className="login-container">
        <h1 className="login-title">Login</h1>
        <Box className="login-form">
          <TextField id="email-login" onChange={handleCorreo} label="Correo" variant="outlined" placeholder="correo@example.com" fullWidth />
          <TextField id="password-login" onChange={handlePassword} label="Contraseña" variant="outlined" placeholder="Contraseña" type="password" fullWidth />
          <Button type="submit" className="login-button">Continuar</Button>
        </Box>
      </Box>
    </form>
  );
}

export default Login;
