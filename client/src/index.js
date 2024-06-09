import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "./components/layout"
import Error from "./pages/errorPage"
import Home from "./pages/home"
import PostDetail from './pages/postDetail';
import Register from './pages/register';
import Login from './pages/login';
import UserProfile from './pages/userProfile';
import CreatePost from './pages/createPost';
import Author from './pages/authors';
import AuthorPost from "./pages/authorPost"
import Dashboard from './pages/dashboard';
import EditPost from './pages/editPost';
import Logout from './pages/logout';
const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "authors", element: <Author />},
      {path: "create", element: <CreatePost />},
      {path: "posts/categories/:category", element: <AuthorPost />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPost />},
      {path: "logout", element: <Logout />},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

