import Layout from "@components/Layout";
import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    errorElement: <ErrorPage />, // 에러가 발생했을 때
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Navigate to='/' /> },
      { path: 'about', element: <About /> },
      { path: 'list', element: <TodoList /> },
      { 
        path: 'list/:_id',
        element: <TodoInfo />,
        children: [
          { path: 'edit', element: <TodoEdit /> },
        ]
      },
      { path: 'add', element: <TodoAdd /> },
    ]
  },
]);

export default router;