import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <p>Home</p>,
    },
    {
        path: "/login",
        element: <p>Login</p>,
    },
])

export function AppRouter() {
    return <RouterProvider router={router} />
}
