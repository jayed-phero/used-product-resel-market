import Blogs from "../components/Pages/Blogs/Blogs";
import AllBuyers from "../components/Pages/Dashboard/AdminRoute/AllBuyers";
import AllSellers from "../components/Pages/Dashboard/AdminRoute/AllSellers";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import AddAProduct from "../components/Pages/Dashboard/SellerRoute/AddAProduct";
import MyProducts from "../components/Pages/Dashboard/SellerRoute/MyProducts";
import MyWishlist from "../components/Pages/Dashboard/UserRoutes/MyWishlist";
import UserRoutes from "../components/Pages/Dashboard/UserRoutes/UserRoutes";
import SingleCategori from "../components/Pages/Home/Categories/SingleCategori";
import Payment from "../components/Pages/Payment/Payment";
import Signup from "../components/Pages/Register/Signup";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Pages/Home/Home/Home");
const { default: Signin } = require("../components/Pages/Register/Signin");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
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
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/categori/:id',
                element: <PrivateRoutes>
                    <SingleCategori/>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_LIN}/products/${params.id}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage/>,
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
                path: '/dashboard/my-wishlist',
                element: <MyWishlist/>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct/>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSellers/>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyers/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_API_LIN}/bookings/${params.id}`)
            },
            {
                path: '/dashboard/wishlistpayment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_API_LIN}/wishlists/${params.id}`)
            }

        ]
    }
])