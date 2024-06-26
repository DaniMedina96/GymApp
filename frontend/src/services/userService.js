import api from "./config";

const getUserProfile = async () => {
  try {
    const userId = localStorage.getItem("idUsuarioLogueado");
    const { data } = await api.get(`/datos_usuario/${userId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const userId = localStorage.getItem("idUsuarioLogueado");
    const { data } = await api.get(`/usuarios/${userId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

const updateUserProfile = async (userId, profileData) => {
  try {
    const { data } = await api.put(`/datos_usuario/${userId}`, profileData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const { data } = await api.put(`/usuarios/${userId}`, userData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export { getUserProfile, getUser, updateUserProfile, updateUser };
