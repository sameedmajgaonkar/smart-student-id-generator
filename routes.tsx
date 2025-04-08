import { createBrowserRouter } from "react-router";
import App from "./src/App";
import StudentIDCard from "./src/components/StudentIDCard";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:id", element: <StudentIDCard /> },
]);

export default router;
