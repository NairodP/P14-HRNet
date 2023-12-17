import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../pages/Root";
import "../css/index.css";
import Home from "../pages/Home";
import { EmployeeProvider } from "../context";

const EmployeeList = lazy(() => import("../pages/EmployeeList"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="employee-list" element={<EmployeeList />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </EmployeeProvider>
  </React.StrictMode>
);
