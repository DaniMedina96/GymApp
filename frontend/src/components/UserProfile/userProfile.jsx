import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './userProfile.css';

const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
};
 export default function UserProfile({ user }) {
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
}


