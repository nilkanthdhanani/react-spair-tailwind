import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../modules/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    }
])

export default router;