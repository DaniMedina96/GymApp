
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './Profile.css';
import { getUserProfile, getUser} from '../../services/userService';
import { useEffect, useState } from 'react';

const Profiles = () => {
  // Datos ficticios del usuario
  const [Profile, setProfile] = useState(null);
const [Usuario,setUsuario] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();

  
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUsuario(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
let user = {
    nombre: 'Juan Pérez',
      altura: 1.75, // en metros
        peso: 68, // en kilogramos
          imagenPerfil: 'https://via.placeholder.com/150', // URL de la imagen de perfil
          genero: 'masculino',
  };
  
console.log(Usuario)
  if (Profile && Usuario) {
     user = {
      nombre: Usuario.nombre,
      altura: Profile.altura,
      peso: Profile.peso,
      imagenPerfil: Profile.imagenPerfil,
      genero: Profile.genero,
    };
}
  
 

  // Cálculo del IMC
  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  };

  return (
    <Container maxWidth="sm">
      <Paper className="paper">
        <Avatar alt="Profile Picture" src={user.imagenPerfil} className="avatar" />
        <Typography variant="h5" gutterBottom>
          {user.nombre}
        </Typography>
        <Typography variant="body1">
          <strong>Altura:</strong> {user.altura} m
        </Typography>
        <Typography variant="body1">
          <strong>Peso:</strong> {user.peso} kg
        </Typography>
        <Typography variant="body1">
          <strong>Genero:</strong> {user.genero}
        </Typography>
        <Typography variant="body1">
          <strong>IMC:</strong> {calculateBMI(user.peso, user.altura)}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" className="button">
              Editar Datos de Usuario
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" className="button">
              Editar Datos de Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profiles;
