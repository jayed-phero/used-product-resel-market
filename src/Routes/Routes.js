import SingleCategori from "../components/Pages/Home/Categories/SingleCategori";
import Signup from "../components/Pages/Register/Signup";

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
    }
])