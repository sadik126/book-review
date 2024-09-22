import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Root.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import Listedbooks from "./assets/Components/Listedbooks/Listedbooks.jsx";
import Pagesread from "./assets/Components/Pagesread/Pagesread.jsx";
import Bookdetails from "./assets/Components/Bookdetails/Bookdetails.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <Listedbooks></Listedbooks>,
        loader: () => fetch("./books_data.json"),
      },
      {
        path: "/pagesread",
        element: <Pagesread></Pagesread>,
        loader: () => fetch("./books_data.json"),
      },
      {
        path: "/book/:id",
        element: <Bookdetails></Bookdetails>,
        loader: () => fetch("./books_data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
