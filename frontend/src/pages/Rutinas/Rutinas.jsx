import './Rutinas.css'
import { getAllRutinas } from '../../services/rutinasServices'
import { useEffect, useState } from 'react'
import RutinasCard from '../../components/RutinasCard/RutinasCard'
import MiRutina from '../../components/MiRutina/MiRutina'

function Rutinas() {
  const [rutinas, setRutinas] = useState([])

  useEffect(() => {
    const rutinasRequest = async () => {
      const result = await getAllRutinas();
      setRutinas(result)
    }
    rutinasRequest();
  }, [])
  console.log(rutinas)
  return (
    <div>
      <h1>Rutinas</h1>
      <MiRutina />
      <div className='rutinas-container'>
        {rutinas.map((rutina) => (
          <RutinasCard
            key={rutina.id}
            rutinaNombre={rutina.nombre}
            rutinaCreador={rutina.creador}
            rutinaAmateur={rutina.amateur}
          />
        ))}
      </div>
    </div>
  )
}
      


export default Rutinas