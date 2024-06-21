import './Ejercicios.css' 
import { getAllEjercicios } from '../../services/ejerciciosServices'
import { useEffect, useState } from 'react'
import EjerciciosCard from '../../components/EjerciciosCard/EjerciciosCard'

function Ejercicios() {
    const [ejercicios, setEjercicios] = useState([])

    useEffect(() => {
        const ejerciciosRequest = async () => {
            const result = await getAllEjercicios();
            setEjercicios(result)
        }
        ejerciciosRequest();
    }, [])
    console.log(ejercicios)
  return (
        <div className='ejercicios-container'>
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


