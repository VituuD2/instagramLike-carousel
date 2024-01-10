import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import FirstC from "./routes/FirstC";
import SecondC from "./routes/SecondC";


const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>,
  },
  {
    path: "FirstC",
    element: <FirstC/>,
  },
  {
    path: "SecondC",
    element: <SecondC/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
