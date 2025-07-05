import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Layout from './components/Layout.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
                loader: () => fetch('https://coffee-store-server-three-sooty.vercel.app/coffee')
            },
            {
                path: "/add-coffee",
                element: <AddCoffee />
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://coffee-store-server-three-sooty.vercel.app/coffee/${params.id}`)
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "users",
                element: <Users />,
                loader: () => fetch('https://coffee-store-server-three-sooty.vercel.app/users')
            },
            {
                path: "users2",
                element: <Users2 />,
                
            }
        ]
    },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProviders>
                <RouterProvider router={router} />
            </AuthProviders>
        </QueryClientProvider>
    </StrictMode>,
)