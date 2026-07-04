import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentForm from "./routing/action-demo/StudentForm.jsx";
import { studentAction } from "./routing/action-demo/actions.js";
import { studentsLoader } from "./routing/action-demo/loader.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentForm />,
    loader: studentsLoader,
    action: studentAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
