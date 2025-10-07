import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./assets/components/User.jsx";
import UpdateUser from "./assets/components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <User></User>,
    loader: ()=> fetch('http://localhost:2000/users')
  },
  {
    path:"/users/update/:id",
    element:<UpdateUser></UpdateUser>,
    loader: ({params}) => fetch(`http://localhost:2000/users/${params.id}`)
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
