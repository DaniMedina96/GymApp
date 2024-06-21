import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/main_Layout";
import NotFound from "../pages/Home/NotFound/NotFound";
import Ejercicios from "../pages/Ejercicios/Ejercicios";
import Planing from "../pages/Planing/Planing";
import Rutinas from "../pages/Rutinas/Rutinas";


const router = createBrowserRouter(
    [
{
    path: '',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
            path: '/ejercicios',
            element: <Ejercicios/>
        },
         {
            path: '/rutinas',
            element: <Rutinas/>
        },
         {
            path: '/planing',
            element: <Planing/>
        },
        
    ]

}
]);


export default router