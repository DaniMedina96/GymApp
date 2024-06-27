import api from "./config";

const getAllEjercicios = async () => {
    try {
        const {data} =  await api.get("ejercicios");
        return data.result;
    } catch (error) {
        console.log(error);
    }
};

const getEjerciciosByUser = async (userId) => {
    // Lógica para obtener los ejercicios por usuario

    try {
        const { data } = await api.get("/ejercicios/");
        return data.result;
    } catch (error) {
        console.log(error);
    }
};

export {
    getAllEjercicios,
    getEjerciciosByUser
} 