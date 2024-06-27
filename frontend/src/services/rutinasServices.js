import api from "./config";

const getAllRutinas = async () => {
    try {
        const {data} =  await api.get("rutina");
        return data.result;
    } catch (error) {
        console.log(error);
    }
};

const getOneRutina = async (id) => {
    try {
        const {data} =  await api.get(`rutina/${id}`);
        return data.result;
    } catch (error) {
        console.log(error);
    }
};
export {
    getAllRutinas,
    getOneRutina
}