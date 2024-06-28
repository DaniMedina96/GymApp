import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SelectorRutina from '../SelectorRutina/SelectorRutina';

const [dialogOpen, setDialogOpen] = useState(false);
const [selectedRutina, setSelectedRutina] = useState(null);

const handleOpenDialog = () => {
  setDialogOpen(true);
};

const handleCloseDialog = () => {
  setDialogOpen(false);
};

const handleRutinaSelect = (rutina) => {
  setSelectedRutina(rutina);
  handleCloseDialog();
};

const DialogoAñadirEjercicioRutina = ({ open, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>My Dialog</DialogTitle>
      <DialogContent dividers>
        <SelectorRutina userId={localStorage.getItem('idUsuarioLogueado')} onRutinaSelect={handleRutinaSelect} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogoAñadirEjercicioRutina;
