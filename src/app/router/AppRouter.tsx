import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Login } from "@/pages/login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <p>Home</p>,
    },
    {
        path: "/login",
        element: <Login />,
    },
])

export function AppRouter () {
    return <RouterProvider router={router} />
}
