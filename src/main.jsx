import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentPortal from "./routing/final-data-router/StudentPortal.jsx";
import { studentsLoader } from "./routing/final-data-router/loader.js";
import { studentAction } from "./routing/final-data-router/action.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPortal />,
    loader: studentsLoader,
    action: studentAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);