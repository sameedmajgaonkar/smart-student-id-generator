import { createBrowserRouter } from "react-router";
import App from "./src/App";
import StudentIDCard from "./src/components/StudentIDCard";
import StudentList from "./src/components/StudentList";
import StudentForm from "./src/components/StudentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <StudentList /> },
      { path: "form", element: <StudentForm /> },
      { path: ":id", element: <StudentIDCard /> },
    ],
  },
]);

export default router;
