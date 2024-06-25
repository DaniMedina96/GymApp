import React, { useState, useEffect } from 'react';
import { getAllEjercicios } from '../../services/ejerciciosServices';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function MiRutina() {
    const [ejercicios, setEjercicios] = useState([]);
    const [miRutina, setMiRutina] = useState([]);
    const [nombreRutina, setNombreRutina] = useState('');
    const [amateur, setAmateur] = useState(false);
    const [creador, setCreador] = useState(1); // Puedes ajustar esto según la lógica de tu aplicación
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEjercicios = async () => {
            try {
                const result = await getAllEjercicios();
                setEjercicios(result);
            } catch (error) {
                console.error('Error fetching exercises:', error);
                setError('Failed to load exercises.');
            }
        };
        fetchEjercicios();
    }, []);

    const agregarEjercicioARutina = (ejercicio) => {
        if (!miRutina.find(e => e.id === ejercicio.id)) {
            setMiRutina([...miRutina, ejercicio]);
        }
    };

    const guardarRutina = async () => {
        if (!nombreRutina.trim()) {
            alert('Por favor, ingrese un nombre para la rutina.');
            return;
        }
        if (miRutina.length === 0) {
            alert('Por favor, añada al menos un ejercicio a la rutina.');
            return;
        }

        const rutina = {
            nombre: nombreRutina,
            ejercicios: miRutina.map(e => e.id),
            creador: creador,
            amateur: amateur,
        };

        setLoading(true);
        try {
            const response = await axios.post('/api/rutina', rutina);
            console.log('Rutina guardada:', response.data);
            setMiRutina([]);
            setNombreRutina('');
            setAmateur(false);
            alert('Rutina creada con éxito!');
        } catch (error) {
            console.error('Error al guardar la rutina:', error);
            alert('Error al guardar la rutina, por favor intente de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card sx={{ maxWidth: 345, margin: "auto", mt: 3, mb: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Crear Mi Rutina
                </Typography>
                <TextField
                    label="Nombre de la Rutina"
                    variant="outlined"
                    fullWidth
                    value={nombreRutina}
                    onChange={(e) => setNombreRutina(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <FormControlLabel
                    control={<Checkbox checked={amateur} onChange={(e) => setAmateur(e.target.checked)} />}
                    label="Amateur"
                />
                {error && <Typography color="error">{error}</Typography>}
                {ejercicios.map(ejercicio => (
                    <Typography key={ejercicio.id} variant="body2" color="text.secondary">
                        {ejercicio.nombre}
                        <Button size="small" onClick={() => agregarEjercicioARutina(ejercicio)}>Añadir</Button>
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={guardarRutina} disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar Rutina'}
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant="h6">
                    Rutina Actual:
                </Typography>
                {miRutina.map((item, index) => (
                    <Typography key={index} variant="body2" color="text.secondary">
                        {item.nombre}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default MiRutina;
