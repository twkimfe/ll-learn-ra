import { createBrowserRouter, Navigate } from "react-router";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home?id=100', element: <Home /> },
  { path: '/page1', element: <Page1 /> }, 
  { path: '/page2', element: <Page2 /> },
]);

export default router;