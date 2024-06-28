import './Ejercicios.css';
import { getAllEjercicios, getEjerciciosByUser } from '../../services/ejerciciosServices';
import { useEffect, useState } from 'react';
import EjerciciosCard from '../../components/EjerciciosCard/EjerciciosCard';
import EjerciciosFilter from '../../components/EjerciciosFilter/EjerciciosFilter';

function Ejercicios() {
    const [allEjercicios, setAllEjercicios] = useState([]);
    const [userEjercicios, setUserEjercicios] = useState([]);
    const [ejercicios, setEjercicios] = useState([]);
    const [showUserEjercicios, setShowUserEjercicios] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const allEjerciciosResult = await getAllEjercicios();
            const userEjerciciosResult = await getEjerciciosByUser(localStorage.getItem("idUsuarioLogueado"));
            setAllEjercicios(allEjerciciosResult);
            setUserEjercicios(userEjerciciosResult);
            setEjercicios(allEjerciciosResult);
        };
        fetchData();
    }, []);

    const handleFilterChange = () => {
        setShowUserEjercicios(prevShowUserEjercicios => !prevShowUserEjercicios);
        if (!showUserEjercicios) {
            setEjercicios(userEjercicios);
        } else {
            setEjercicios(allEjercicios);
        }
    };

    return (
        <div className='ejercicios-container'>
            <div className='ejercicios-filter'>
                {localStorage.getItem("idUsuarioLogueado") && (
                    <EjerciciosFilter
                        onSwitchChange={handleFilterChange}
                        showUserExercises={showUserEjercicios}
                    />
                )}
            </div>
            <div className='ejercicios-list'>
                {ejercicios.map((ejercicio) => (
                    <EjerciciosCard
                        key={ejercicio.id}
                        className='ejercicio-card'
                        ejercicioNombre={ejercicio.nombre}
                        ejercicioDescripcion={ejercicio.descripcion}
                        ejercicioImagen={ejercicio.imagen}
                    />
                ))}
            </div>
        </div>
    );
}

export default Ejercicios;
