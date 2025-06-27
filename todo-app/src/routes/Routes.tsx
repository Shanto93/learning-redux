import App from "@/App";
import TaskPage from "@/pages/TaskPage";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        // path: "tasks",
        Component: TaskPage,
      },
      {
        path: "tasks",
        Component: TaskPage,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
]);
