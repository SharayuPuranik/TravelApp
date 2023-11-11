import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog';
import About from './pages/About';
import Plan from './pages/Plan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Plan",
    element: <Plan />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
