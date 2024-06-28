
import './Profile.css';
import { getUserProfile, getUser } from '../../services/userService';
import { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile/userProfile';
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile'; // Importa el nuevo componente

const Profiles = () => {
  const [profile, setProfile] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
    nombre: 'Daniel Medina',
    altura: 1.75,
    peso: 68,
    imagenPerfil: 'https://via.placeholder.com/150',
    genero: 'masculino',
  };

  if (profile && usuario) {
    user = {
      nombre: usuario.nombre,
      altura: profile.altura,
      peso: profile.peso,
      imagenPerfil: profile.imagenPerfil,
      genero: profile.genero,
    };
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    // Aquí puedes agregar la lógica para guardar los datos actualizados en tu backend
    console.log("Datos actualizados:", updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditUserProfile user={user} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <UserProfile user={user} onEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Profiles;
