import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                elemnet: <>Prodcuts</>,
            },
        ]
    }
];

export const router = createBrowserRouter (routes); 

