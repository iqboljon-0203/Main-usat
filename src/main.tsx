import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import "./i18n";
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import store from "./app/store";
import { Provider} from 'react-redux';
import NewsPage from './pages/News/News';
import NewsCategories from './pages/NewsCategories/App.jsx';
import NewsItem from "./pages/NewsItem/App.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: 'login',
        element: <div>Login</div>,
    },
    {
        path: 'register',
        element: <div>Register</div>,
    },
    {
        path: 'dashboard',
        element: <div>Dashboard</div>,
    },
    {
        path: '/news/:slug/:name',
        element:<NewsPage></NewsPage>,
    },
    {
        path: '/news',
        element:<NewsCategories></NewsCategories>,
    },
    {
        path: '/news/:slug',
        element:<NewsItem></NewsItem>
    },
   
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <NextUIProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </NextUIProvider>
    </Provider>
)

