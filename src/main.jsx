import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: () => fetch('http://localhost:5000/coffee')
    },
    {
        path: "add-coffee",
        element: <AddCoffee />
    },
    {
        path: "update-coffee",
        element: <UpdateCoffee />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
