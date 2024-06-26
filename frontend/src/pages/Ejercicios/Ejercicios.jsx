import './Ejercicios.css' 
import { getAllEjercicios } from '../../services/ejerciciosServices'
import { useEffect, useState } from 'react'
import EjerciciosCard from '../../components/EjerciciosCard/EjerciciosCard'
import EjerciciosFilter from '../../components/EjerciciosFilter/EjerciciosFilter'


    function Ejercicios() {
        const [ejercicios, setEjercicios] = useState([]);
        const [filteredEjercicios, setFilteredEjercicios] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const [ejerciciosResult] = await Promise.all([getAllEjercicios()]);
                setEjercicios(ejerciciosResult);
                setFilteredEjercicios(ejerciciosResult);
            };
            fetchData();
        }, []);

        const handleFilterChange = async (userId) => {
            setSelectedUser(userId);
            if (userId === '') {
                setFilteredEjercicios(ejercicios);
            } else {
                const filtered = await getEjerciciosByUser(userId);
                setFilteredEjercicios(filtered);
            }
        };


    console.log(ejercicios)
  return (
        <div className='ejercicios-container'>
          
              <EjerciciosFilter
                  onFilterChange={handleFilterChange}
              />
          {filteredEjercicios.map((ejercicio) => (
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


