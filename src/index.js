import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/app.css";
import "./styles/main.css";
import "./styles/index.css";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.js';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement: <ErrorPage />,
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

