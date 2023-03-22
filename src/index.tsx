import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Form from "./components/Form/Form";
import MyMedications from "./components/Medications/MyMedications";
import RefillRequest from "./components/RefillRequests/RefillRequests";

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: 'add',
      element: <Form />
    },
    {
      path: 'medications',
      element: <MyMedications />
    },
    {
      path: 'requests',
      element: <RefillRequest />
    }
  ]
}]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);