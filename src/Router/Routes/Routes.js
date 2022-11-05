import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../Component/Pages/CheckOut/CheckOut";
import Home from "../../Component/Pages/Home/Home";
import Login from "../../Component/Pages/Login/Login";
import SignUp from "../../Component/Pages/SignUp/SignUp";
import Main from "../../Roots/Main";
import Orders from "../../../src/Component/Pages/Orders/Orders"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
            
        ]
    }
])

export default router;