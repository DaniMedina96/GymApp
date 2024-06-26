import { useState } from 'react';
import './EditUserProfile.css';

const EditUserProfile = ({ user, onSave, onCancel }) => {
  const [nombre, setNombre] = useState(user.nombre);
  const [altura, setAltura] = useState(user.altura);
  const [peso, setPeso] = useState(user.peso);
  const [imagenPerfil, setImagenPerfil] = useState(user.imagenPerfil);
  const [genero, setGenero] = useState(user.genero);

  const handleSave = () => {
    const updatedUser = { ...user, nombre, altura, peso, imagenPerfil, genero };
    onSave(updatedUser);
  };

  return (
    <div className="edit-user-profile">
      <h2>Editar Datos de Usuario</h2>
      <form>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Altura:
          <input type="number" step="0.01" value={altura} onChange={(e) => setAltura(parseFloat(e.target.value))} />
        </label>
        <label>
          Peso:
          <input type="number" step="0.1" value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} />
        </label>
        <label>
          Género:
          <select value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </label>
        <label>
          Imagen de Perfil:
          <input type="text" value={imagenPerfil} onChange={(e) => setImagenPerfil(e.target.value)} />
        </label>
        <button type="button" onClick={handleSave}>Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditUserProfile;
