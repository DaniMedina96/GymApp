

import './Profile.css';
import { getUserProfile, getUser} from '../../services/userService';
import { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile/userProfile';

const Profiles = () => {
  // Datos ficticios del usuario
  const [Profile, setProfile] = useState(null);
const [Usuario,setUsuario] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();

  
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUsuario(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
let user = {
    nombre: 'Juan Pérez',
      altura: 1.75, // en metros
        peso: 68, // en kilogramos
          imagenPerfil: 'https://via.placeholder.com/150', // URL de la imagen de perfil
          genero: 'masculino',
  };
  
console.log(Usuario)
  if (Profile && Usuario) {
     user = {
      nombre: Usuario.nombre,
      altura: Profile.altura,
      peso: Profile.peso,
      imagenPerfil: Profile.imagenPerfil,
      genero: Profile.genero,
    };
}
  
 

  // Cálculo del IMC
 

  return (
   <div>
    {
<UserProfile user={user} />
    }
   </div>
  );
};

export default Profiles;
