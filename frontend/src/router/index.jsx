import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/main_Layout";
import NotFound from "../pages/Home/NotFound/NotFound";


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
        }
        
    ]

}
]);


export default router