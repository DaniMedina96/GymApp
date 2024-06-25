import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/main_Layout";
import NotFound from "../pages/NotFound/NotFound";
import Ejercicios from "../pages/Ejercicios/Ejercicios";
import Planing from "../pages/Planing/Planing";
import Rutinas from "../pages/Rutinas/Rutinas";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";


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
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        
    ]

}
]);


export default router