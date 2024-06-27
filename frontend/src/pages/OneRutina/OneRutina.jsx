import './OneRutina.css';
import { useParams } from 'react-router-dom';
import { getOneRutina } from '../../services/rutinasServices';
import { useEffect, useState } from 'react';
import Rutinas from '../Rutinas/Rutinas';

function OneRutina() {
    const { id } = useParams()
     const [rutina, setRutina] = useState({})
    
  useEffect(() => {
    const rutinasRequest = async () => {
      const result = await getOneRutina(id);
      setRutina(result)
    }
    rutinasRequest();
  }, [id])


  return (
    <div className="">
        {Object.keys(rutina).length === 0
          ? <p>Loading...</p>
          : 
     (
        <div>
          <h1>{rutina.nombre}</h1>
          <p>Creado por: {rutina.creador}</p>
          <h3>Ejercicios:</h3>
          <ul>
            {rutina.ejercicios?.map((ejercicio) => (
              <li key={ejercicio.id}>{ejercicio.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OneRutina;
