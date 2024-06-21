import api from "./config";

const getAllEjercicios = async () => {
    try {
        const {data} =  await api.get("ejercicios");
        return data.result;
    } catch (error) {
        console.log(error);
    }
};

export {
    getAllEjercicios
} 