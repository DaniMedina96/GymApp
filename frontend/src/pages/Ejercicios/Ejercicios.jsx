import './Ejercicios.css' 
import { getAllEjercicios, getEjerciciosByUser } from '../../services/ejerciciosServices'
import { useEffect, useState } from 'react'
import EjerciciosCard from '../../components/EjerciciosCard/EjerciciosCard'
import EjerciciosFilter from '../../components/EjerciciosFilter/EjerciciosFilter'
import shadows from '@mui/material/styles/shadows'


    function Ejercicios() {
        const [ejercicios, setEjercicios] = useState([]);
        const [filteredEjercicios, setFilteredEjercicios] = useState([]);
        const [showUserEjercicios, setshowUserEjercicios] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
                const ejerciciosResult = await getAllEjercicios();
                const filteredResult = await getEjerciciosByUser(localStorage.getItem("idUsuarioLogueado"));
                setEjercicios(ejerciciosResult);
                setFilteredEjercicios(filteredResult);
            };
            fetchData();
        }, []);

        const handleFilterChange =() => {
            setshowUserEjercicios(!showUserEjercicios);
            if (showUserEjercicios) {
                setEjercicios(filteredEjercicios);
            } else {
                
                setEjercicios(ejercicios);
            }
        };


    console.log(ejercicios)
  return (
        <div className='ejercicios-container'>
          
              {/* <EjerciciosFilter
                  onSwitchChange={handleFilterChange}
                  showUserExercises={showUserEjercicios}
              /> */}
          {ejercicios.map((ejercicio) => (
                <EjerciciosCard
                    key={ejercicio.id}
                    ejercicioNombre={ejercicio.nombre}
                    ejercicioDescripcion={ejercicio.descripcion}
                    ejercicioImagen={ejercicio.imagen}
                />
            ))}
        </div>
  )
}

export default Ejercicios


