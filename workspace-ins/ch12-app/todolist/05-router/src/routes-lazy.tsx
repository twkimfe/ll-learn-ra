import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import('@components/Layout'));
const About = lazy(() => import('@pages/About'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const Home = lazy(() => import('@pages/Home'));
const TodoAdd = lazy(() => import('@pages/TodoAdd'));
const TodoEdit = lazy(() => import('@pages/TodoEdit'));
const TodoInfo = lazy(() => import('@pages/TodoInfo'));
const TodoList = lazy(() => import('@pages/TodoList'));

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