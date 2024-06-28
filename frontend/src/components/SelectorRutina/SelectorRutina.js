// components/RutinasList.js
import React, { useEffect, useState } from 'react';
import { getRutinasByUser } from '../services/rutinasService';
import { List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

const RutinasList = ({ userId, onRutinaSelect }) => {
    const [rutinas, setRutinas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRutina, setSelectedRutina] = useState(null);

    useEffect(() => {
        const fetchRutinas = async () => {
            try {
                const rutinasData = await getRutinasByUser(userId);
                setRutinas(rutinasData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchRutinas();
    }, [userId]);

    const handleRutinaClick = (rutina) => {
        setSelectedRutina(rutina);
        onRutinaSelect(rutina);
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div>
            <Typography variant="h6">Rutinas</Typography>
            <List>
                {rutinas.map((rutina) => (
                    <ListItem
                        key={rutina.id}
                        button
                        selected={selectedRutina?.id === rutina.id}
                        onClick={() => handleRutinaClick(rutina)}
                    >
                        <ListItemText
                            primary={rutina.nombre}
                            secondary={`Número de ejercicios: ${rutina.ejercicios.length}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default RutinasList;
