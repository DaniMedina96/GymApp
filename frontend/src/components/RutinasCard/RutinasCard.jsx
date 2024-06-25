import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function RutinasCard({rutinaCreador, rutinaNombre, RutinaAmateur}) {
  return (
    <Card sx={{ Width: "400px", height: "150px"}}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={ejercicioImagen}
        title="ejercicioImagen"
      />  */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rutinaNombre}
        </Typography>
       <Typography variant="body2" color="text.secondary">
          {rutinaCreador}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {RutinaAmateur}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><AddIcon/></Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}