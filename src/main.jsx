import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Students from "./routing/loader-demo/Students.jsx";
import { studentsLoader } from "./routing/loader-demo/loader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Students />,
    loader: studentsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
