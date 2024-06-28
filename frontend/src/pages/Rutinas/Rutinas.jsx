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
      <h1 className='rutinas-title'>Rutinas</h1>
      <MiRutina />
      <div className='rutinas-container'>
        {rutinas.map((rutina) => (
          <RutinasCard
            key={rutina.id}
            rutinaId={rutina.id}
            rutinaNombre={rutina.nombre}
            rutinaCreador={rutina.usuario.nombre}
            rutinaAmateur={rutina.amateur}
          />
        ))}
      </div>
    </div>
  )
}
      


export default Rutinas