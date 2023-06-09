import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../Pages/MyReview/MyReview";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/AddService',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                loader: () => {
                    const services = fetch('https://food-run-server-sumankdatta.vercel.app/services')
                    return services
                },
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://food-run-server-sumankdatta.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>

            },
            {
                path: '/myReview/:id',
                loader: ({ params }) => fetch(`https://food-run-server-sumankdatta.vercel.app/review/${params.id}`),
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://food-run-server-sumankdatta.vercel.app/update/${params.id}`),
                element: <UpdateReview></UpdateReview>
            }
        ]
    }
])