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
        path: '/news/:id',
        element:<NewsPage></NewsPage>,
    },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <NextUIProvider>
            <RouterProvider router={router}></RouterProvider>
        </NextUIProvider>
    </Provider>
)

