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
import CategoryPost from './pages/categoryPost';
import Author from './pages/authors';
import AuthorPost from "./pages/authorPost"
import Dashboard from './pages/dashboard';
import EditPost from './pages/editPost';
import DeletePost from './pages/deletePost';
import Logout from './pages/logout';
import CreatePost from "./pages/createPost"
import UserProvider from './context/userContext';

const router= createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "authors", element: <Author />},
      {path: "posts/users/:id", element: <AuthorPost />},
      {path: "posts/categories/:category", element: <CategoryPost />},
      {path: "create", element: <CreatePost />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPost />},
      {path: "posts/:id/delete", element: <DeletePost />},
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

