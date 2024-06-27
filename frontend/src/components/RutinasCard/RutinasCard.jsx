import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function RutinasCard({ rutinaCreador, rutinaNombre, RutinaAmateur }) {
  return (
    <Card sx={{ width: 400, height: 200, margin: 2, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent sx={{ backgroundColor: '#fff', padding: 3 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#FF6347' }}>
          {rutinaNombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          <strong>Creador:</strong> {rutinaCreador}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Amateur:</strong> {RutinaAmateur ? 'Sí' : 'No'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', paddingRight: 3, paddingBottom: 2 }}>
        <Button size="small" sx={{ color: '#FF6347' }}>
          <AddIcon />
        </Button>
        <Button size="small" sx={{ color: '#FF6347' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
