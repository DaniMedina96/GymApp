import "./EjerciciosCard.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function EjerciciosCard({ ejercicioDescripcion, ejercicioNombre, ejercicioImagen }) {
  return (
    <Card sx={{ width: 400, height: 300, margin: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ejercicioImagen == null ? ejercicioImagen : "https://st4.depositphotos.com/3265223/24936/v/450/depositphotos_249366040-stock-illustration-fitness-gym-logo-with-strong.jpg"}
        title="ejercicioImagen"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ejercicioNombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ejercicioDescripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AddIcon />}>Add</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

