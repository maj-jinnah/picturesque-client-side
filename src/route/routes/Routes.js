import Main from '../../layout/Main'
import { createBrowserRouter } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog';
import ErrorPage from '../../pages/ErrorPage';
import LogIn from '../../pages/LogIn';
import Register from '../../pages/Register';
import Services from '../../pages/Services';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';
import ServiceDetails from '../../pages/ServiceDetails';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/home"),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch("http://localhost:5000/services"),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])