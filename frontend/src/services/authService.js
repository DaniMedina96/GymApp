import api from "./config";

/**
 * Function that signs up a user
 * @param {Object} dataForm - The data form of the user to sign up
 * @returns {Promise<Object>} A promise that resolves with the response data
 */
const signUp = async (dataForm) => {
  try {
    // Send a POST request to the signup endpoint
    const { data } = await api.post("auth/signup", dataForm);

    // Save the token and role in local storage
    localStorage.setItem("token", data.token);
    localStorage.setItem("rol", data.result.rol);
    localStorage.setItem("idUsuarioLogueado", data.result.id); // Ensure we use 'idUsuariologueado' consistently

    // Return the response data
    return data;
  } catch (error) {
    // Log the error and re-throw it
    console.log(error);
    throw error;
  }
};

const login = async (dataForm) => {
  try {
    // Send a POST request to the login endpoint
    const { data } = await api.post("auth/login", dataForm);

    // Save the token and role in local storage
    localStorage.setItem("token", data.token);
    localStorage.setItem("rolUsuarioLogueado", data.result.rol);
    localStorage.setItem("idUsuarioLogueado", data.result.id); // Ensure we use 'idUsuariologueado' consistently

    // Return the response data
    return data;
  } catch (error) {
    // Log the error and re-throw it
    console.log(error);
    throw error;
  }
};

export { signUp, login };
