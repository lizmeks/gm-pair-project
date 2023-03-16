import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import FormContainer from "./components/FormContainer";
import MyMedications from "./components/MyMedications";

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: 'add',
      element: <FormContainer />
    },
    {
      path: 'medications',
      element: <MyMedications />
    }
  ]
}]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);