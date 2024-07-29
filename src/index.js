import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/store"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import {Login} from "./components/imports"
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPost from "./pages/AllPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                    <Login />
            ),
        },
        {
            path: "/signup",
            element: (
                    <Signup />
            ),
        },
        {
            path: "/all-posts",
            element: (
                    <AllPost />
            ),
        },
        {
            path: "/add-post",
            element: (
                    <AddPost />
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                    <EditPost />
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
