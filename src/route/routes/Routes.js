import Main from '../../layout/Main'
import { createBrowserRouter } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog';
import ErrorPage from '../../pages/ErrorPage';
import LogIn from '../../pages/LogIn';
import Register from '../../pages/Register';
import Services from '../../pages/Services';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <PrivetRoutes><Services></Services></PrivetRoutes>
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