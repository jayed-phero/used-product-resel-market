import SingleCategori from "../components/Pages/Home/Categories/SingleCategori";

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
                path: 'signin',
                element: <Signin/>
            },
            {
                path: '/categori/:id',
                element: <SingleCategori/>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_LIN}/categori/${params.id}`),
            }
        ]
    }
])