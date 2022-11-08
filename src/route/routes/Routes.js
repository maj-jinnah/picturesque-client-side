import Main from '../../layout/Main'
import { createBrowserRouter } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog';
import ErrorPage from '../../pages/ErrorPage';
import LogIn from '../../pages/LogIn';

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])