// src/components/EjerciciosFilter/EjerciciosFilter.js
import "./EjerciciosFilter.css";
// src/components/UserExercisesSwitch/UserExercisesSwitch.js
import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

export default function EjerciciosFilter({ showUserExercises, onSwitchChange }) {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={showUserExercises}
                    onChange={(e) => onSwitchChange(e.target.checked)}
                    name="userExercisesSwitch"
                    color="primary"
                />
            }
            label="Mostrar solo mis ejercicios"
        />
    );
}