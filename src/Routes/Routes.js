import Dashboard from "../components/Pages/Dashboard/Dashboard";
import AddAProduct from "../components/Pages/Dashboard/SellerRoute/AddAProduct";
import UserRoutes from "../components/Pages/Dashboard/UserRoutes/UserRoutes";
import SingleCategori from "../components/Pages/Home/Categories/SingleCategori";
import Signup from "../components/Pages/Register/Signup";
import DashboardLayout from "../Layout/DashboardLayout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Pages/Home/Home/Home");
const { default: Signin } = require("../components/Pages/Register/Signin");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/categori/:id',
                element: <SingleCategori/>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_LIN}/products/${params.id}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/userroutes',
                element: <UserRoutes/>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct/>
            }

        ]
    }
])