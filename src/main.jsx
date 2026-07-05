import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { availabilityLoader } from "./routing/fetcher-demo/availabilityLoader.js";
import UserChecker from "./routing/fetcher-demo/UserChecker.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserChecker />,
  },
  {
    path: "/check-username",
    loader: availabilityLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
